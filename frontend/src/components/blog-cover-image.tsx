import Image from "next/image";
import { isBackendAsset } from "@/lib/api";

/**
 * Blog borítókép — a backend feltöltésekhez `unoptimized`,
 * mert a Next image optimizer local/dev és cross-origin esetén gyakran elhasal.
 */
export function BlogCoverImage({
  src,
  alt,
  fill,
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      unoptimized={isBackendAsset(src)}
    />
  );
}
