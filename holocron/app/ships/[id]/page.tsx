import ships from "../../data/ships";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return ships.map((ship) => ({
    id: ship.id.toString(),
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const ship = ships.find((ship) => 
    ship.id.toString() === id
  );

  if (!ship) notFound();

  return (
    <main className="max-w-6xl mx-auto p-10">
      <Link href={`/`} className={"block text-gray-400 hover:text-yellow-500 transition duration-150 mb-6"}>← Back</Link>

      <div className="starwars-font starwars-glow text-5xl md:text-6xl font-bold mb-2 tracking-wide text-yellow-400">{ship.name.toLowerCase()}</div>
      <div className="h-px bg-yellow-400/30 mb-6 w-full"></div>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">MANUFACTURER</p>
          <p className="text-white">{ship.manufacturer}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">MODEL</p>
          <p className="text-white">{ship.model}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">CLASS</p>
          <p className="text-white">{ship.class}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">LENGTH</p>
          <p className="text-white">{ship.length}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">CREW</p>
          <p className="text-white">{ship.crew}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">PASSENGERS</p>
          <p className="text-white">{ship.passengers}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">CARGO CAPACITY</p>
          <p className="text-white">{ship.cargoCapacity}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">HYPERDRIVE</p>
          <p className="text-white">{ship.hyperdrive}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">AFFILIATION</p>
          <p className="text-white">{ship.affiliation}</p>
        </div>
      </div>

      <p className="mt-6 mb-6 text-gray-400">{ship.description}</p>
      <p className="text-gray-400 text-xs uppercase tracking-wider">Notable Users:</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {ship.notableUsers.map((user) => (
          <span key={user} className="bg-gray-800 text-sm px-3 py-1 rounded border border-gray-700">{user}</span>
        ))}
      </div>
    </main>
  )
}