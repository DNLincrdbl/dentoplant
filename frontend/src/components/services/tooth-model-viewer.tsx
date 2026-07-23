"use client";

import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { ContactShadows, Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import type { Locale } from "@/lib/i18n/config";

/** A modell helye a /public mappában. */
export const TOOTH_MODEL_URL = "/models/fogsor.glb";

const BRAND = "#8c4ba2";
const BRAND_LIGHT = "#c298d2";
const BRAND_SOFT = "#d9bce4";

/** Szemből, közel szemmagasságban — ne látszódjon a modell teteje / hátulja. */
const DEFAULT_CAM = new THREE.Vector3(0, 0.12, 5.1);
const LOOK_AT = new THREE.Vector3(0, 0.05, 0.15);

/* ---------- fognév-feloldás ---------- */

const POSITION_HU = [
  "középső metszőfog",
  "oldalsó metszőfog",
  "szemfog",
  "első kisőrlő",
  "második kisőrlő",
  "első nagyőrlő",
  "második nagyőrlő",
  "bölcsességfog",
];
const POSITION_EN = [
  "central incisor",
  "lateral incisor",
  "canine",
  "first premolar",
  "second premolar",
  "first molar",
  "second molar",
  "wisdom tooth",
];
const QUADRANT_HU = ["Jobb felső", "Bal felső", "Bal alsó", "Jobb alsó"];
const QUADRANT_EN = ["Upper right", "Upper left", "Lower left", "Lower right"];

type ToothInfo = {
  fdi: string | null;
  quadrant: string;
  name: string;
  full: string;
};

function toothInfo(meshName: string, en: boolean): ToothInfo {
  const fdiMatch = meshName.match(/(?:^|[^0-9])([1-4][1-8])(?:[^0-9]|$)/);
  if (fdiMatch) {
    const fdi = fdiMatch[1];
    const q = Number(fdi[0]) - 1;
    const p = Number(fdi[1]) - 1;
    const quadrant = en ? QUADRANT_EN[q] : QUADRANT_HU[q];
    const name = en ? POSITION_EN[p] : POSITION_HU[p];
    return { fdi, quadrant, name, full: `${quadrant} ${name}` };
  }
  const pretty = meshName.replace(/[_.]/g, " ").replace(/\s+/g, " ").trim();
  const full = pretty.charAt(0).toUpperCase() + pretty.slice(1);
  return { fdi: null, quadrant: "", name: full, full };
}

/* ---------- kiválasztás ---------- */

type Selection = {
  mesh: THREE.Mesh;
  info: ToothInfo;
  center: THREE.Vector3;
};

/* ---------- mesh hologram overlay (wireframe + glowing vertices) ---------- */

function ToothOverlay({ mesh }: { mesh: THREE.Mesh }) {
  const group = useRef<THREE.Group>(null);
  const pop = useRef(0);

  const { fill, wires, points, localCenter, fillMaterial, wireMaterial, pointsMaterial, disposables } =
    useMemo(() => {
      const geo = mesh.geometry;
      geo.computeBoundingBox();
      const localCenter = geo.boundingBox!.getCenter(new THREE.Vector3());

      const fillMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(BRAND),
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
        depthTest: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
      });

      const fillMesh = new THREE.Mesh(geo, fillMaterial);
      fillMesh.renderOrder = 2;

      const wireGeo = new THREE.WireframeGeometry(geo);
      const wireMaterial = new THREE.LineBasicMaterial({
        color: new THREE.Color(BRAND_LIGHT),
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
      });
      const wireLines = new THREE.LineSegments(wireGeo, wireMaterial);
      wireLines.renderOrder = 3;

      const src = geo.getAttribute("position");
      const dedup = new Map<string, [number, number, number]>();
      for (let i = 0; i < src.count; i++) {
        const x = src.getX(i);
        const y = src.getY(i);
        const z = src.getZ(i);
        const key = `${x.toFixed(4)}|${y.toFixed(4)}|${z.toFixed(4)}`;
        dedup.set(key, [x, y, z]);
      }
      const arr = new Float32Array(dedup.size * 3);
      let i = 0;
      for (const p of dedup.values()) {
        arr[i++] = p[0];
        arr[i++] = p[1];
        arr[i++] = p[2];
      }
      const pointsGeo = new THREE.BufferGeometry();
      pointsGeo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
      const pointsMaterial = new THREE.PointsMaterial({
        color: new THREE.Color("#f3e8f8"),
        size: 0.028,
        sizeAttenuation: true,
        transparent: true,
        opacity: 1,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
      });
      const pointsObj = new THREE.Points(pointsGeo, pointsMaterial);
      pointsObj.renderOrder = 4;

      return {
        fill: fillMesh,
        wires: wireLines,
        points: pointsObj,
        localCenter,
        fillMaterial,
        wireMaterial,
        pointsMaterial,
        disposables: [wireGeo, pointsGeo, fillMaterial, wireMaterial, pointsMaterial],
      };
    }, [mesh]);

  useFrame((_, delta) => {
    pop.current = THREE.MathUtils.damp(pop.current, 1, 7, delta);
    const pulse = 0.75 + Math.sin(performance.now() * 0.0035) * 0.25;
    fillMaterial.opacity = 0.14 + pop.current * 0.12 * pulse;
    wireMaterial.opacity = 0.55 + pop.current * 0.4 * pulse;
    pointsMaterial.opacity = 0.65 + pop.current * 0.35 * pulse;
    pointsMaterial.size = 0.022 + pop.current * 0.012 * pulse;
  });

  useFrame(() => {
    if (!group.current) return;
    mesh.updateWorldMatrix(true, false);
    group.current.matrix.copy(mesh.matrixWorld);
    group.current.matrixAutoUpdate = false;
  });

  useEffect(() => {
    return () => {
      for (const d of disposables) d.dispose();
    };
  }, [disposables]);

  return (
    <group ref={group}>
      <primitive object={fill} />
      <primitive object={wires} />
      <primitive object={points} />
      <pointLight
        position={[localCenter.x, localCenter.y, localCenter.z]}
        intensity={1.4}
        distance={1.8}
        color={BRAND_LIGHT}
      />
    </group>
  );
}

/* ---------- lebegő címke ---------- */

function ToothLabelCard({ info, en }: { info: ToothInfo; en: boolean }) {
  return (
    <div className="tooth-label pointer-events-none select-none">
      <div className="tooth-label-inner">
        {info.fdi && (
          <div className="tooth-label-fdi">
            <span className="tooth-label-fdi-num">{info.fdi}</span>
            <span className="tooth-label-fdi-cap">{en ? "FDI" : "FDI"}</span>
          </div>
        )}
        <div className="tooth-label-text">
          {info.quadrant && <div className="tooth-label-quad">{info.quadrant}</div>}
          <div className="tooth-label-name">{info.name}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- modell + interakció ---------- */

function TeethModel({
  en,
  selection,
  onSelect,
}: {
  en: boolean;
  selection: Selection | null;
  onSelect: (s: Selection | null) => void;
}) {
  const { scene } = useGLTF(TOOTH_MODEL_URL);
  const hoverRef = useRef<THREE.Mesh | null>(null);

  useLayoutEffect(() => {
    // Reset, mert a useGLTF scene cacheelt — különben a forgatás összeadódik.
    scene.position.set(0, 0, 0);
    scene.rotation.set(0, 0, 0);
    scene.scale.set(1, 1, 1);

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const scale = 4.2 / Math.max(size.x, size.y, size.z || 1);
    scene.scale.setScalar(scale);
    const centered = new THREE.Box3().setFromObject(scene);
    const center = centered.getCenter(new THREE.Vector3());
    scene.position.sub(center);
    scene.updateMatrixWorld(true);

    // Forgasd úgy, hogy a frontfogak (11/21) a kamera felé (+Z) nézzenek.
    const frontSamples: THREE.Vector3[] = [];
    scene.traverse((obj) => {
      const m = obj as THREE.Mesh;
      if (!m.isMesh) return;
      const n = m.name || m.parent?.name || "";
      if (/tooth_11|tooth_21/.test(n)) {
        frontSamples.push(m.getWorldPosition(new THREE.Vector3()));
      }
    });
    if (frontSamples.length > 0) {
      const front = frontSamples
        .reduce((acc, p) => acc.add(p), new THREE.Vector3())
        .multiplyScalar(1 / frontSamples.length);
      front.y = 0;
      if (front.lengthSq() > 0.0001) {
        // +π: a frontfogak a kamera felé (+Z) nézzenek, ne a fogív hátulja.
        const yaw = Math.atan2(front.x, front.z);
        scene.rotation.y -= yaw + Math.PI;
        scene.updateMatrixWorld(true);
        const recentered = new THREE.Box3().setFromObject(scene).getCenter(new THREE.Vector3());
        scene.position.sub(recentered);
      }
    }

    scene.traverse((obj) => {
      const m = obj as THREE.Mesh;
      if (!m.isMesh) return;
      m.castShadow = false;
      m.receiveShadow = false;
      // Enyhe anyagfinomítás — ne legyen túl fényes.
      const mats = Array.isArray(m.material) ? m.material : [m.material];
      for (const mat of mats) {
        if (!mat) continue;
        if (
          mat instanceof THREE.MeshStandardMaterial ||
          mat instanceof THREE.MeshPhysicalMaterial
        ) {
          mat.envMapIntensity = 0.55;
          mat.roughness = Math.max(mat.roughness ?? 0.5, 0.55);
          mat.metalness = Math.min(mat.metalness ?? 0, 0.04);
          mat.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  const pickTooth = (obj: THREE.Object3D): THREE.Mesh | null => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return null;
    const name = mesh.name || mesh.parent?.name || "";
    if (/gum|gingiva|jaw|mandib|maxill|tongue/i.test(name)) return null;
    if (!/tooth|^[1-4][1-8]$/i.test(name)) return null;
    return mesh;
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    const mesh = pickTooth(e.object);
    if (!mesh) {
      onSelect(null);
      return;
    }
    if (selection?.mesh === mesh) {
      onSelect(null);
      return;
    }
    const name = mesh.name || mesh.parent?.name || "";
    mesh.geometry.computeBoundingBox();
    const center = mesh.geometry.boundingBox!.getCenter(new THREE.Vector3());
    mesh.localToWorld(center);
    onSelect({ mesh, info: toothInfo(name, en), center });
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const mesh = pickTooth(e.object);
    document.body.style.cursor = mesh ? "pointer" : "default";
    hoverRef.current = mesh;
  };

  return (
    <>
      <primitive
        object={scene}
        onClick={handleClick}
        onPointerMove={handlePointerMove}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      />
      {selection && <ToothOverlay key={selection.mesh.uuid} mesh={selection.mesh} />}
    </>
  );
}

/** Szemből max ennyi jobbra/balra (kb. a háromnegyedes nézet a referenciaképen). */
const MAX_AZIMUTH = THREE.MathUtils.degToRad(50);
const MIN_POLAR = Math.PI * 0.47;
const MAX_POLAR = Math.PI * 0.53;

/** Kamerapozíció a target körül, azimut/polár korlátozással. */
function clampOrbitPosition(pos: THREE.Vector3, target: THREE.Vector3, radius?: number) {
  const offset = pos.clone().sub(target);
  const sph = new THREE.Spherical().setFromVector3(offset);
  if (radius !== undefined) sph.radius = radius;
  sph.theta = THREE.MathUtils.clamp(sph.theta, -MAX_AZIMUTH, MAX_AZIMUTH);
  sph.phi = THREE.MathUtils.clamp(sph.phi, MIN_POLAR, MAX_POLAR);
  return target.clone().add(new THREE.Vector3().setFromSpherical(sph));
}

function CameraRig({ selection }: { selection: Selection | null }) {
  const controls = useRef<OrbitControlsImpl>(null);
  const desiredPos = useRef(DEFAULT_CAM.clone());
  const desiredTarget = useRef(LOOK_AT.clone());
  const dragging = useRef(false);
  /** true = animálunk a célpozícióra (kiválasztás / visszaállás); idle-ben szabad a forgatás */
  const animating = useRef(false);
  const prevSelection = useRef<Selection | null>(null);

  useFrame(({ camera }, delta) => {
    const selectionChanged = prevSelection.current !== selection;
    if (selectionChanged) {
      animating.current = true;
      prevSelection.current = selection;
    }

    if (selection) {
      const focus = selection.center.clone();
      focus.y = selection.center.y * 0.45 + LOOK_AT.y;
      desiredTarget.current.copy(focus);

      // Ideális nézet a fog „kifelé” irányából…
      const outward = new THREE.Vector3(selection.center.x, 0, selection.center.z);
      if (outward.lengthSq() < 1e-6) outward.set(0, 0, 1);
      outward.normalize();
      outward.z = Math.max(outward.z, 0.2);
      outward.normalize();

      const ideal = focus.clone().addScaledVector(outward, 3.65);
      ideal.y = 0.12;
      // …de soha ne lépje túl a max ~50°-os oldalsó nézetet.
      desiredPos.current.copy(clampOrbitPosition(ideal, focus, 3.65));
    } else if (animating.current) {
      desiredTarget.current.copy(LOOK_AT);
      desiredPos.current.copy(DEFAULT_CAM);
    }

    if (dragging.current || !animating.current) return;

    const lambda = 3.8;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, desiredPos.current.x, lambda, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, desiredPos.current.y, lambda, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, desiredPos.current.z, lambda, delta);

    if (controls.current) {
      const t = controls.current.target;
      t.x = THREE.MathUtils.damp(t.x, desiredTarget.current.x, lambda, delta);
      t.y = THREE.MathUtils.damp(t.y, desiredTarget.current.y, lambda, delta);
      t.z = THREE.MathUtils.damp(t.z, desiredTarget.current.z, lambda, delta);
      camera.lookAt(t);
    }

    const arrived =
      camera.position.distanceTo(desiredPos.current) < 0.05 &&
      (!controls.current || controls.current.target.distanceTo(desiredTarget.current) < 0.05);

    if (arrived) {
      animating.current = false;
      controls.current?.update();
    }
  });

  return (
    <OrbitControls
      ref={controls}
      enablePan={false}
      enableZoom={false}
      autoRotate={false}
      minPolarAngle={MIN_POLAR}
      maxPolarAngle={MAX_POLAR}
      minAzimuthAngle={-MAX_AZIMUTH}
      maxAzimuthAngle={MAX_AZIMUTH}
      target={LOOK_AT.toArray() as [number, number, number]}
      onStart={() => {
        dragging.current = true;
        animating.current = false;
      }}
      onEnd={() => {
        dragging.current = false;
      }}
    />
  );
}

/* ---------- publikus komponens ---------- */

export function ToothModelViewer({ locale = "hu" }: { locale?: Locale }) {
  const en = locale === "en";
  const [selection, setSelection] = useState<Selection | null>(null);

  return (
    <div className="tooth-viewer relative overflow-hidden rounded-3xl border border-brand-300/50 bg-gradient-to-b from-[#efe3f5] via-[#f6eef9] to-[#ebe0f2]">
      <style>{`
        .tooth-viewer .tooth-label {
          animation: toothLabelIn 480ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .tooth-viewer .tooth-label-inner {
          display: flex;
          align-items: stretch;
          gap: 0;
          overflow: hidden;
          border-radius: 0.9rem;
          border: 1px solid rgba(140, 75, 162, 0.35);
          background: linear-gradient(135deg, rgba(255,255,255,0.94), rgba(247,240,250,0.9));
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.5) inset,
            0 14px 32px -16px rgba(58, 25, 71, 0.45),
            0 0 28px -8px rgba(140, 75, 162, 0.3);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          min-width: 168px;
          transform: translateY(-110%);
        }
        .tooth-viewer .tooth-label-fdi {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          padding: 0.55rem 0.7rem;
          background: linear-gradient(180deg, #8c4ba2, #73308a);
          color: white;
        }
        .tooth-viewer .tooth-label-fdi-num {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .tooth-viewer .tooth-label-fdi-cap {
          font-size: 0.5rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          opacity: 0.75;
        }
        .tooth-viewer .tooth-label-text {
          padding: 0.55rem 0.85rem 0.55rem 0.75rem;
          text-align: left;
        }
        .tooth-viewer .tooth-label-quad {
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #73308a;
          opacity: 0.8;
        }
        .tooth-viewer .tooth-label-name {
          margin-top: 0.1rem;
          font-size: 0.82rem;
          font-weight: 650;
          color: #3a1947;
          text-transform: capitalize;
          line-height: 1.25;
        }
        @keyframes toothLabelIn {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.92);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        .tooth-viewer .tooth-hud {
          transition: opacity 280ms ease, transform 280ms ease;
        }
        .tooth-viewer .tooth-hud-idle {
          opacity: 0.9;
        }
        .tooth-viewer .tooth-hud-active {
          animation: toothHudPulse 2.4s ease-in-out infinite;
        }
        @keyframes toothHudPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(140, 75, 162, 0.0); }
          50% { box-shadow: 0 0 24px 0 rgba(140, 75, 162, 0.25); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.55)_0%,transparent_55%),radial-gradient(ellipse_at_80%_90%,rgba(140,75,162,0.14)_0%,transparent_45%)]" />

      <div className="relative h-[420px] w-full md:h-[520px]">
        <Canvas
          camera={{ position: DEFAULT_CAM.toArray(), fov: 42 }}
          dpr={[1, 2.5]}
          onPointerMissed={() => setSelection(null)}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.95,
          }}
        >
          <color attach="background" args={["#efe3f5"]} />
          <hemisphereLight args={["#ffffff", BRAND_SOFT, 0.45]} />
          <ambientLight intensity={0.42} />
          <directionalLight position={[3.8, 5.8, 4.2]} intensity={0.95} color="#ffffff" />
          <directionalLight position={[-4.2, 2.2, 1.5]} intensity={0.4} color={BRAND_LIGHT} />
          <directionalLight position={[0.4, 1.2, -4.5]} intensity={0.35} color={BRAND_SOFT} />
          <pointLight position={[0, 0.35, 2.8]} intensity={0.25} distance={9} color="#fff7ff" />
          <Suspense fallback={null}>
            <Environment preset="studio" environmentIntensity={0.28} />
            <TeethModel en={en} selection={selection} onSelect={setSelection} />
            <ContactShadows
              position={[0, -1.72, 0]}
              opacity={0.22}
              scale={14}
              blur={2.8}
              far={5}
              color="#5a2d6e"
            />
            {selection && (
              <Html
                key={selection.mesh.uuid}
                position={[selection.center.x, selection.center.y + 0.4, selection.center.z]}
                center
                zIndexRange={[20, 0]}
                style={{ pointerEvents: "none" }}
                // Nincs distanceFactor → képernyőméretű marad zoomnál is.
              >
                <ToothLabelCard info={selection.info} en={en} />
              </Html>
            )}
          </Suspense>
          <CameraRig selection={selection} />
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center px-4">
        <div
          className={`tooth-hud rounded-2xl border px-4 py-2 text-center text-sm backdrop-blur-md ${
            selection
              ? "tooth-hud-active border-brand-300/70 bg-white/90 text-brand-900"
              : "tooth-hud-idle border-brand-300/50 bg-white/70 text-brand-800"
          }`}
        >
          {selection ? (
            <span className="font-semibold tracking-tight">
              {selection.info.fdi && (
                <span className="mr-2 inline-block rounded-md bg-brand-600 px-1.5 py-0.5 text-[11px] font-bold text-white">
                  {selection.info.fdi}
                </span>
              )}
              {selection.info.full}
            </span>
          ) : en ? (
            "Click a tooth to explore"
          ) : (
            "Kattintson egy fogra a felfedezéshez"
          )}
        </div>
      </div>
    </div>
  );
}

if (typeof window !== "undefined") {
  useGLTF.preload(TOOTH_MODEL_URL);
}

