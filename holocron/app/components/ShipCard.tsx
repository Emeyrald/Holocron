import type { Ship } from "../data/ships";

type ShipCardProps = {
    ship: Ship;
};

export default function ShipCard({ ship }: ShipCardProps) {
    return (
        <div className="bg-gray-900 p-5 rounded-x1 border border-gray-800
                        hover:border-blue-500 hover:-translate-y-1
                        transition duration-200 shadow-lg">
            <h3 className="text-lg font-semibold mb-1">{ship.name}</h3>
            <p className="text-gray-400">{ship.manufacturer}</p>
        </div>
    );
}
