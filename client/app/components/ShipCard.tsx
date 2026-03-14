type Ship = {
    id: number;
    name: string;
    manufacturer: string
};

export default function ShipCard({ ship }: { ship: Ship }) {
    return (
        <div>
            <h3>{ship.name}</h3>
            <p>{ship.manufacturer}</p>
        </div>
    );
}