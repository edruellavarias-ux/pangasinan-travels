import Link from "next/link";
import Hero from "../components/organisms/Hero";
import DestinationGrid from "../components/organisms/DestinationGrid";
import { destinations } from "../data/destinations";

export default function Home() {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <>
      <Hero />

      <main>
        <section className="section">
          <div className="container">

            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  START EXPLORING
                </p>

                <h2>
                  Places worth discovering
                </h2>
              </div>

              <Link
                href="/explore"
                className="text-link"
              >
                View all destinations →
              </Link>
            </div>

            <DestinationGrid
              destinations={featuredDestinations}
            />

          </div>
        </section>
      </main>
    </>
  );
}