import Logo from "../atoms/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">

        <Link href="/" aria-label="Pangasinan Travel home">
          <Logo />
        </Link>

        <nav
          className="main-nav"
          aria-label="Main navigation"
        >
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/about">About</Link>
        </nav>

      </div>
    </header>
  );
}