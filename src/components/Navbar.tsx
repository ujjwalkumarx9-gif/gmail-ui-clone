import {
  Settings,
  Bell,
  Grid2x2,
  Menu,
} from 'lucide-react'

import SearchBar from './SearchBar'

interface Props {
  search: string
  setSearch: (value: string) => void
  toggleSidebar: () => void
}

const Navbar = ({
  search,
  setSearch,
  toggleSidebar,
}: Props) => {
  return (
    <header className="h-16 px-4 flex items-center justify-between bg-[#f6f8fc] sticky top-0 z-50">
      <div className="flex items-center gap-4 w-full">
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 rounded-full hover:bg-gray-200 transition flex items-center justify-center"
        >
          <Menu size={22} className="text-gray-700" />
        </button>

        <h1 className="text-2xl font-normal text-gray-700">
          Gmail
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="flex items-center gap-2 ml-4">
        {[Grid2x2, Settings, Bell].map((Icon, index) => (
          <button
            key={index}
            className="w-10 h-10 rounded-full hover:bg-gray-200 transition flex items-center justify-center"
          >
            <Icon size={20} className="text-gray-600" />
          </button>
        ))}

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-9 h-9 rounded-full cursor-pointer"
        />
      </div>
    </header>
  )
}

export default Navbar