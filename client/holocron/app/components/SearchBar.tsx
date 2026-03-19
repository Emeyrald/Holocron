type SearchBarProps = {
    value:string;
    onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <input
            className="w-full max-w-md mb-8 px-4 py-3 rounded-lg
                       bg-gray-900 text-white border border-gray-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search ships..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}