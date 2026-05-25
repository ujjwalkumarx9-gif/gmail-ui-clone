import { Search } from 'lucide-react'

interface Props {
  search: string
  setSearch: (value: string) => void
}

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <div className="flex items-center bg-[#eaf1fb] rounded-full px-4 h-12 w-full max-w-3xl transition-all focus-within:shadow-md">
      <Search size={20} className="text-gray-500" />

      <input
        type="text"
        placeholder="Search mail"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent outline-none flex-1 px-4 text-sm"
      />
    </div>
  )
}

export default SearchBar