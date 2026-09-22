import { notFound } from "next/navigation";
import SiteImage from "../../../components/atoms/SiteImage";
import Button from "../../../components/atoms/Button";
import { destinations } from "../../../data/destinations";

export function generateStaticParams() {
  return destinations.map((destination) => ({
    id: destination.id,
  }));
}

export default async function DestinationPage({ params }) {
  const { id } = await params;

  const destination = destinations.find(
    (item) => item.id === id
  );

  if (!destination) {
    notFound();
  }

  return (
    <main>
      <section className="destination-detail">
        <div className="container">

          <div className="detail-image">
            <SiteImage
              src={destination.image}
              alt={destination.name}
            />
          </div>

          <div className="detail-content">

            <p className="eyebrow">
              {destination.category}
            </p>

            <p className="destination-location">
              {destination.location}
            </p>

            <h1>{destination.name}</h1>

            <p className="lead">
              {destination.description}
            </p>

            <p>
              {destination.longDescription}
            </p>

            <Button href="/explore">
              ← Back to destinations
            </Button>

          </div>

        </div>
      </section>
    </main>
  );
}