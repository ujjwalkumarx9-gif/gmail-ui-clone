import EmailRow from './EmailRow'
import type { Email } from '../types/email'

interface Props {
  emails: Email[]
}

const EmailList = ({ emails }: Props) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 flex-1">
      {emails.map((email) => (
        <EmailRow key={email.id} email={email} />
      ))}
    </div>
  )
}

export default EmailList