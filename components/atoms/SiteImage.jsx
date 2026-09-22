import Image from "next/image";

export default function SiteImage({
  src,
  alt,
  className = "",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={900}
      height={600}
      className={className}
    />
  );
}