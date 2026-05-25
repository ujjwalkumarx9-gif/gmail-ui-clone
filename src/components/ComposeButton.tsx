import { Pencil } from 'lucide-react'

interface Props {
  collapsed: boolean
}

const ComposeButton = ({ collapsed }: Props) => {
  return (
    <button
      className={`flex items-center bg-[#c2e7ff]
      hover:shadow-md transition-all duration-300 rounded-2xl
      h-14 text-sm font-medium text-gray-800
      ${
        collapsed
          ? 'justify-center w-14 px-0'
          : 'gap-3 px-6'
      }`}
    >
      <Pencil size={18} />

      {!collapsed && 'Compose'}
    </button>
  )
}

export default ComposeButton