import SiteImage from "../atoms/SiteImage";
import Button from "../atoms/Button";

export default function DestinationCard({
  destination,
}) {
  return (
    <article className="destination-card">
      <div className="destination-image">
        <SiteImage
          src={destination.image}
          alt={destination.name}
        />

        <span className="destination-category">
          {destination.category}
        </span>
      </div>

      <div className="destination-content">
        <p className="destination-location">
          {destination.location}
        </p>

        <h3>{destination.name}</h3>

        <p>{destination.description}</p>

        <Button
          href={`/destinations/${destination.id}`}
          variant="outline"
        >
          Explore
        </Button>
      </div>
    </article>
  );
}