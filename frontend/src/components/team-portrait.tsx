import Image from "next/image";
import type { TeamMember } from "@/lib/team";

/**
 * Portrékép a kártya / profil keretben.
 * `imageCrop.scale < 1` (pl. Melitta) kicsinyít, hogy a szoros headshot
 * hasonló arcméretet adjon a waist-up fotókhoz; a háttér a keret gradientje.
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
  const position = member.imageCrop?.position ?? "50% 18%";

  return (
    <div
      className={
        hoverZoom
          ? "absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          : "absolute inset-0"
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
          transformOrigin: "50% 40%",
        }}
      />
    </div>
  );
}
