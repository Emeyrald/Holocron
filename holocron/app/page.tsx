"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ShipCard from "./components/ShipCard";
import ships from "./data/ships";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [shipClass, setShipClass] = useState("");

  const filteredShips = ships.filter((ship) =>
    ship.name.toLowerCase().includes(search.toLowerCase()) &&
    (affiliation === "" || ship.affiliation === affiliation) &&
    (shipClass === "" || ship.class === shipClass)
  );

  const handleChange = (
    field: "search" | "affiliation" | "shipClass",
    value: string
  ) => {
    if (field === "search") setSearch(value);
    else if (field === "affiliation") setAffiliation(value);
    else setShipClass(value);
  };

  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className={"starwars-font starwars-glow text-5xl md:text-6xl font-bold mb-2 tracking-wide text-yellow-400"}>
        holocron
      </h1>
      <p className="text-gray-400 mb-6">
        A digital archive of starships, technology, and galactic history
      </p>

      <div className="h-px bg-yellow-400/30 mb-6 w-111"></div>

      <SearchBar search={search} affiliation={affiliation} shipClass={shipClass} onChange={handleChange} />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredShips.map((ship) => (
          <Link className="block h-full" key={ship.id} href={`/ships/${ship.id}`}>
            <ShipCard ship={ship} />
          </Link>
        ))}
      </div>
    </main>
  );
}