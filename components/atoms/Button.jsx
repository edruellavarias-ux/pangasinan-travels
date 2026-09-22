import Link from "next/link";

export default function Button({
  children,
  href = "#",
  variant = "primary",
}) {
  return (
    <Link
      href={href}
      className={`button button-${variant}`}
    >
      {children}
    </Link>
  );
}