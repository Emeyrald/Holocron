"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ShipCard from "./components/ShipCard";
import ships from "./data/ships";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredShips = ships.filter((ship) =>
    ship.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className={"starwars-font starwars-glow text-5xl md:text-6xl font-bold mb-2 tracking-wide text-yellow-400"}>
        holocron
      </h1>
      <p className="text-gray-400 mb-6">
        A digital archive of starships, technology, and galactic history
      </p>

      <div className="h-px bg-yellow-400/30 mb-6 w-111"></div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredShips.map((ship) => (
          <ShipCard key={ship.id} ship={ship} />
        ))}
      </div>
    </main>
  );
}