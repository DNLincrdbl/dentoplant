/**
 * A fogsor.glb "Teeth" mesh-ét összefüggő komponensekre (fogakra) bontja,
 * FDI-számozás szerint elnevezi őket (tooth_11 … tooth_48), és új GLB-t ír.
 *
 * Futtatás: node scripts/split-teeth.mjs public/models/fogsor.glb
 */
import { NodeIO } from "@gltf-transform/core";
import { prune } from "@gltf-transform/functions";

const path = process.argv[2] ?? "public/models/fogsor.glb";
const io = new NodeIO();
const doc = await io.read(path);
const root = doc.getRoot();

const teethMesh = root.listMeshes().find((m) => /teeth/i.test(m.getName() ?? ""));
if (!teethMesh) {
  console.error("Nem található 'Teeth' nevű mesh. Meshek:", root.listMeshes().map((m) => m.getName()));
  process.exit(1);
}
const prim = teethMesh.listPrimitives()[0];
const posAcc = prim.getAttribute("POSITION");
const indices = prim.getIndices().getArray();
const positions = posAcc.getArray();
const vertexCount = posAcc.getCount();

// --- Vertexek hegesztése pozíció szerint (a komponens-kereséshez) ---
const keyOf = (i) =>
  `${positions[i * 3].toFixed(4)},${positions[i * 3 + 1].toFixed(4)},${positions[i * 3 + 2].toFixed(4)}`;
const weld = new Map();
const rep = new Int32Array(vertexCount);
for (let i = 0; i < vertexCount; i++) {
  const k = keyOf(i);
  if (weld.has(k)) rep[i] = weld.get(k);
  else {
    weld.set(k, i);
    rep[i] = i;
  }
}

// --- Union-find a háromszögeken ---
const parent = new Int32Array(vertexCount).map((_, i) => i);
const find = (x) => {
  while (parent[x] !== x) {
    parent[x] = parent[parent[x]];
    x = parent[x];
  }
  return x;
};
const union = (a, b) => {
  const ra = find(a);
  const rb = find(b);
  if (ra !== rb) parent[ra] = rb;
};
for (let t = 0; t < indices.length; t += 3) {
  const a = rep[indices[t]];
  const b = rep[indices[t + 1]];
  const c = rep[indices[t + 2]];
  union(a, b);
  union(b, c);
}

// --- Háromszögek csoportosítása komponensenként ---
const groups = new Map();
for (let t = 0; t < indices.length; t += 3) {
  const g = find(rep[indices[t]]);
  if (!groups.has(g)) groups.set(g, []);
  groups.get(g).push(t);
}
console.log(`Komponensek száma: ${groups.size}`);

// --- Komponens-statisztikák (centroid, méret) ---
const comps = [];
for (const [g, tris] of groups) {
  let cx = 0, cy = 0, cz = 0, n = 0;
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (const t of tris) {
    for (let k = 0; k < 3; k++) {
      const vi = indices[t + k];
      const x = positions[vi * 3], y = positions[vi * 3 + 1], z = positions[vi * 3 + 2];
      cx += x; cy += y; cz += z; n++;
      min[0] = Math.min(min[0], x); min[1] = Math.min(min[1], y); min[2] = Math.min(min[2], z);
      max[0] = Math.max(max[0], x); max[1] = Math.max(max[1], y); max[2] = Math.max(max[2], z);
    }
  }
  comps.push({
    g,
    tris,
    centroid: [cx / n, cy / n, cz / n],
    size: Math.hypot(max[0] - min[0], max[1] - min[1], max[2] - min[2]),
    triCount: tris.length,
  });
}
comps.sort((a, b) => b.triCount - a.triCount);
comps.forEach((c, i) =>
  console.log(
    `#${i} tris=${c.triCount} size=${c.size.toFixed(2)} centroid=(${c.centroid.map((v) => v.toFixed(1)).join(", ")})`,
  ),
);

// Apró törmelék (ha van) hozzácsapása a legközelebbi nagy komponenshez helyett: elnevezetlenül marad.
const MIN_TRIS = 50;
const teeth = comps.filter((c) => c.triCount >= MIN_TRIS);
const debris = comps.filter((c) => c.triCount < MIN_TRIS);
console.log(`Fogjelölt: ${teeth.length}, törmelék: ${debris.length}`);

// --- FDI-nevek hozzárendelése ---
// Felső/alsó szétválasztás párosítással: minden foghoz megkeressük a legközelebbi
// másikat az (x,z) síkban — az okklúzióban álló párból a magasabb Y a felső fog.
const upper = [];
const lower = [];
const used = new Set();
for (const c of teeth) {
  if (used.has(c)) continue;
  let best = null;
  let bestD = Infinity;
  for (const o of teeth) {
    if (o === c || used.has(o)) continue;
    const d = Math.hypot(c.centroid[0] - o.centroid[0], c.centroid[2] - o.centroid[2]);
    if (d < bestD) {
      bestD = d;
      best = o;
    }
  }
  if (!best) break;
  used.add(c);
  used.add(best);
  if (c.centroid[1] >= best.centroid[1]) {
    upper.push(c);
    lower.push(best);
  } else {
    upper.push(best);
    lower.push(c);
  }
}
console.log(`Felső: ${upper.length}, alsó: ${lower.length}`);

function nameArch(arch, isUpper) {
  // Középvonal az X-centroidok átlaga.
  const cx = arch.reduce((s, c) => s + c.centroid[0], 0) / (arch.length || 1);
  const right = arch.filter((c) => c.centroid[0] <= cx); // páciens jobb oldala (nézetből bal)
  const left = arch.filter((c) => c.centroid[0] > cx);
  // Elölről (nagy z, metszőfogak) hátrafelé (kis z, őrlők) számozunk.
  right.sort((a, b) => b.centroid[2] - a.centroid[2]);
  left.sort((a, b) => b.centroid[2] - a.centroid[2]);
  const qRight = isUpper ? 1 : 4;
  const qLeft = isUpper ? 2 : 3;
  right.forEach((c, i) => (c.fdi = qRight * 10 + Math.min(i + 1, 8)));
  left.forEach((c, i) => (c.fdi = qLeft * 10 + Math.min(i + 1, 8)));
}
nameArch(upper, true);
nameArch(lower, false);

// --- Új primitívek/mesh-ek/node-ok építése ---
const buffer = root.listBuffers()[0];
const scene = root.getDefaultScene() ?? root.listScenes()[0];
const teethNode = root.listNodes().find((n) => n.getMesh() === teethMesh);
const parentNode = teethNode?.getParentNode?.() ?? null;

const attrs = prim.listSemantics().map((sem) => [sem, prim.getAttribute(sem)]);

function buildPrim(tris) {
  const remap = new Map();
  const localIdx = [];
  for (const t of tris) {
    for (let k = 0; k < 3; k++) {
      const vi = indices[t + k];
      if (!remap.has(vi)) remap.set(vi, remap.size);
      localIdx.push(remap.get(vi));
    }
  }
  const newPrim = doc.createPrimitive().setMaterial(prim.getMaterial());
  for (const [sem, acc] of attrs) {
    const src = acc.getArray();
    const elem = acc.getElementSize();
    const dst = new src.constructor(remap.size * elem);
    for (const [oldI, newI] of remap) {
      for (let e = 0; e < elem; e++) dst[newI * elem + e] = src[oldI * elem + e];
    }
    const newAcc = doc
      .createAccessor()
      .setType(acc.getType())
      .setArray(dst)
      .setBuffer(buffer);
    newPrim.setAttribute(sem, newAcc);
  }
  const IdxArr = remap.size > 65535 ? Uint32Array : Uint16Array;
  const idxAcc = doc
    .createAccessor()
    .setType("SCALAR")
    .setArray(new IdxArr(localIdx))
    .setBuffer(buffer);
  newPrim.setIndices(idxAcc);
  return newPrim;
}

const container = doc.createNode("TeethSplit");
if (teethNode) {
  container.setMatrix(teethNode.getMatrix());
}
(parentNode ?? scene).addChild(container);

for (const c of teeth) {
  const name = `tooth_${c.fdi}`;
  const mesh = doc.createMesh(name).addPrimitive(buildPrim(c.tris));
  const node = doc.createNode(name).setMesh(mesh);
  container.addChild(node);
}
if (debris.length) {
  const tris = debris.flatMap((c) => c.tris);
  const mesh = doc.createMesh("teeth_debris").addPrimitive(buildPrim(tris));
  container.addChild(doc.createNode("teeth_debris").setMesh(mesh));
}

// Régi, egyben lévő fogsor eltávolítása.
if (teethNode) teethNode.dispose();
teethMesh.dispose();

await doc.transform(prune());
await io.write(path, doc);
console.log("Kész:", path);
