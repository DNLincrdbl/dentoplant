import Image from "next/image";
import type { TeamMember } from "@/lib/team";

/**
 * Egységes portrékép — Csongor waist-up méret a referencia.
 * object-cover + object-position; a scale a teljes alakos fotókat
 * hozzávágja ugyanehhez az arányhoz a 4:5 keretben.
 */
export function TeamPortrait({
  member,
  sizes,
  priority = false,
  hoverZoom = false,
}: {
  member: TeamMember;
  sizes: string;
  priority?: boolean;
  hoverZoom?: boolean;
}) {
  if (!member.image) return null;

  const scale = member.imageCrop?.scale ?? 1;
  const position = member.imageCrop?.position ?? "50% 14%";

  return (
    <div
      className={
        hoverZoom
          ? "absolute inset-0 overflow-hidden bg-[#e9e5ea] transition-transform duration-500 group-hover:scale-[1.03]"
          : "absolute inset-0 overflow-hidden bg-[#e9e5ea]"
      }
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{
          objectPosition: position,
          transform: scale === 1 ? undefined : `scale(${scale})`,
          transformOrigin: position,
        }}
      />
    </div>
  );
}
