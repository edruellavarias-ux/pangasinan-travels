export default function Button({
  children,
  href = "#",
  variant = "primary",
}) {
  return (
    <a
      href={href}
      className={`button button-${variant}`}
    >
      {children}
    </a>
  );
}