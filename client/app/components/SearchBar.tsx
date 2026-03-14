type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <input
            type="text"
            placeholder="Search ships..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}