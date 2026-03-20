export type Ship = {
    id: number;
    name: string;
    manufacturer: string;
};

const ships: Ship[] = [
    {
        id: 1,
        name: "T-65 X-Wing Starfighter",
        manufacturer: "Incom Corporation",
    },
    {
        id: 2,
        name: "TIE Fighter",
        manufacturer: "Sienar Fleet Systems",
    },
    {
        id: 3,
        name: "YT-1300 Light Freighter",
        manufacturer: "Corellian Engineering Corporation",
    },
    {
        id: 4,
        name: "Imperial I-class Star Destroyer",
        manufacturer: "Kuat Drive Yards",
    },
    {
        id: 5,
        name: "Firespray-31-class Patrol and Attack Craft",
        manufacturer: "Kuat Systems Engineering",
    },
];

export default ships;