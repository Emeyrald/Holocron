import type { Ship } from "../data/ships";

type ShipCardProps = {
    ship: Ship;
};

export default function ShipCard({ ship }: ShipCardProps) {
    return (
        <div>
            <h3>{ship.name}</h3>
            <p>{ship.manufacturer}</p>
        </div>
    );
}