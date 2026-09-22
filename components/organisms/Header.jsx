import Logo from "../atoms/Logo";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" aria-label="Lakbay Pangasinan home">
          <Logo />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/explore">Explore</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  );
}