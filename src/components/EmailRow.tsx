import { Star } from 'lucide-react'
import type { Email } from '../types/email'

interface Props {
  email: Email
}

const EmailRow = ({ email }: Props) => {
  return (
    <div className="grid grid-cols-[40px_40px_180px_1fr_100px] items-center h-14 px-4 border-b border-gray-200 hover:shadow-sm hover:bg-gray-100 cursor-pointer transition-all text-sm">
      <input type="checkbox" />

      <Star
        size={18}
        className={
          email.starred
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-400'
        }
      />

      <span
        className={`truncate ${
          email.unread ? 'font-bold' : 'font-medium'
        }`}
      >
        {email.sender}
      </span>

      <div className="truncate">
        <span
          className={email.unread ? 'font-bold' : ''}
        >
          {email.subject}
        </span>

        <span className="text-gray-500">
          {' '}
          - {email.preview}
        </span>
      </div>

      <span
        className={`text-right text-xs ${
          email.unread ? 'font-bold' : 'text-gray-500'
        }`}
      >
        {email.time}
      </span>
    </div>
  )
}

export default EmailRow