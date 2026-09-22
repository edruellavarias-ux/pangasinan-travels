import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        <div>
          <div className="footer-brand">
            <span className="logo-mark">P</span>

            <strong>PANGASINAN TRAVEL</strong>
          </div>

          <p>
            Discover the places, stories, and experiences
            that make Pangasinan worth exploring.
          </p>
        </div>

        <div>
          <h3>Explore</h3>

          <Link href="/">Home</Link>
          <Link href="/explore">Destinations</Link>
          <Link href="/about">About Pangasinan</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Pangasinan Travel. For educational purposes.
        </p>
      </div>
    </footer>
  );
}