import DestinationCard from "../molecules/DestinationCard";

export default function DestinationGrid({
  destinations,
}) {
  return (
    <div className="destination-grid">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
}