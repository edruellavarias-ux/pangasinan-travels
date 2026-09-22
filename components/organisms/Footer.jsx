export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        <div>
          <div className="footer-brand">
            <span className="logo-mark">PT</span>
            <strong>PANGASINAN TRAVELS</strong>
          </div>

          <p>
            Discover the places, stories, and experiences
            that make Pangasinan worth exploring.
          </p>
        </div>

        <div>
          <h3>Explore</h3>

          <a href="/">Home</a>
          <a href="/explore">Destinations</a>
          <a href="/about">About Pangasinan Travels</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Pangasinan Travels. For educational purposes.
        </p>
      </div>
    </footer>
  );
}