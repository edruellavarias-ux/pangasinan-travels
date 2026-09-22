"use client";

import { useState } from "react";
import DestinationGrid from "../../components/organisms/DestinationGrid";
import { destinations } from "../../data/destinations";

export default function ExplorePage() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Beach",
    "Nature",
  ];

  const filteredDestinations =
    category === "All"
      ? destinations
      : destinations.filter(
          (destination) =>
            destination.category === category
        );

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">DESTINATIONS</p>

          <h1>
            Find your next place to explore.
          </h1>

          <p>
            Browse some of the natural attractions
            and scenic destinations of Pangasinan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="filter-bar">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={
                  category === item
                    ? "filter-button active"
                    : "filter-button"
                }
              >
                {item}
              </button>
            ))}
          </div>

          <DestinationGrid
            destinations={filteredDestinations}
          />

        </div>
      </section>
    </main>
  );
}