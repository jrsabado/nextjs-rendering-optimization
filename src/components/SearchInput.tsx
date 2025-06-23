interface SearchInputProps {
  onChange: (value: string) => void;
}

export default function SearchInput({ onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-lg p-3 border border-gray-300 rounded-lg shadow-sm mb-8"
    />
  );
}
