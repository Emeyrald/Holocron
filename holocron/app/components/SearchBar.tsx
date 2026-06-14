type SearchBarProps = {
    search:string;
    affiliation:string;
    shipClass:string;

    onChange: (field: "search" | "affiliation" | "shipClass", value: string) => void;
};

export default function SearchBar({ search, affiliation, shipClass, onChange }: SearchBarProps) {
    return (
        <div className="flex-container">
            <input
                className="w-full max-w-md mb-8 px-4 py-3 rounded-lg
                        bg-gray-900 text-white border border-gray-700
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Search ships..."
                value={search}
                onChange={(e) => onChange("search", e.target.value)}
            />
            <select 
                className="ml-4 mb-8 px-4 py-3 rounded-lg
                        bg-gray-900 text-white border border-gray-700
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={affiliation}
                onChange={(e) => onChange("affiliation", e.target.value)}
            >
                <option value="">Affiliation</option>
                <option value="Galactic Republic">Galactic Republic</option>
                <option value="Confederacy of Independent Systems">Confederacy of Independent Systems</option>
                <option value="Rebel Alliance">Rebel Alliance</option>
                <option value="Galactic Empire">Galactic Empire</option>
                <option value="Independent">Independent</option>
            </select>
            <select 
                className="ml-4 mb-8 px-4 py-3 rounded-lg
                        bg-gray-900 text-white border border-gray-700
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={shipClass}
                onChange={(e) => onChange("shipClass", e.target.value)}
            >
                <option value="">Class</option>
                <option value="Super Capital Ship">Super Capital Ship</option>
                <option value="Capital Ship">Capital Ship</option>
                <option value="Frigate">Frigate</option>
                <option value="Corvette">Corvette</option>
                <option value="Heavy Freighter">Heavy Freighter</option>
                <option value="Light Freighter">Light Freighter</option>
                <option value="Gunboat">Gunboat</option>
                <option value="Bomber">Bomber</option>
                <option value="Fighter">Fighter</option>
            </select>
        </div>
    );
}