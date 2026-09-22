import Image from "next/image";

export default function SiteImage({
  src,
  alt,
  className = "",
}) {
  const imageSrc = src.startsWith("/pangasinan-travels")
    ? src
    : `/pangasinan-travels${src}`;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={900}
      height={600}
      className={className}
      unoptimized
    />
  );
}