import Button from "../atoms/Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <p className="eyebrow">
          YOUR NEXT ADVENTURE STARTS HERE
        </p>

        <h1>
          Explore the
          <span> beauty of Pangasinan.</span>
        </h1>

        <p className="hero-description">
          Discover peaceful rivers, beautiful beaches,
          natural caves, and unforgettable experiences
          across Pangasinan.
        </p>

        <div className="hero-actions">
          <Button href="/explore">
            Explore Destinations
          </Button>

          <Button
            href="/about"
            variant="outline"
          >
            About Pangasinan Travels
          </Button>
        </div>

      </div>
    </section>
  );
}