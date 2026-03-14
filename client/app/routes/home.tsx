import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ShipCard from "../components/ShipCard";
import ships from "../data/ships";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredShips = ships.filter((ship) =>
    ship.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: "40px" }}>
      <h1>Holocron</h1>
      
      <SearchBar value={search} onChange={setSearch} />

      {filteredShips.map((ship) => (
        <ShipCard key={ship.id} ship={ship} />
      ))}
    </main>
  );
}
