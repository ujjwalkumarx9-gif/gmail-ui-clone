import {
  Inbox,
  Star,
  Clock3,
  Send,
  File,
  Trash2,
} from 'lucide-react'

import ComposeButton from './ComposeButton'

const items = [
  { icon: Inbox, label: 'Inbox', active: true },
  { icon: Star, label: 'Starred' },
  { icon: Clock3, label: 'Snoozed' },
  { icon: Send, label: 'Sent' },
  { icon: File, label: 'Drafts' },
  { icon: Trash2, label: 'Trash' },
]

interface Props {
  collapsed: boolean
}

const Sidebar = ({ collapsed }: Props) => {
  return (
    <aside
      className={`pt-2 px-3 flex flex-col gap-4 transition-all duration-300
      ${collapsed ? 'w-[88px]' : 'w-[260px]'}`}
    >
      <ComposeButton collapsed={collapsed} />

      <div className="flex flex-col gap-1">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.label}
              className={`flex items-center h-10 rounded-r-full px-4 text-[14px] transition-all duration-200
              ${collapsed ? 'justify-center' : 'gap-4'}
              ${
                item.active
                  ? 'bg-[#d3e3fd] font-semibold text-black'
                  : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              <Icon size={18} />

              {!collapsed && item.label}
            </button>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar