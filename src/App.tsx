import { useState } from 'react'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'

import { emails } from './data/emails'

function App() {
  const [search, setSearch] = useState('')
  const [collapsed, setCollapsed] = useState(false)

  const filteredEmails = emails.filter((email) =>
    `${email.sender} ${email.subject} ${email.preview}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  )

  return (
    <div className="h-screen flex flex-col bg-[#f6f8fc]">
      <Navbar
        search={search}
        setSearch={setSearch}
        toggleSidebar={() => setCollapsed(!collapsed)}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={collapsed} />

        <main className="flex-1 px-2 py-3 overflow-y-auto">
          <EmailList emails={filteredEmails} />
        </main>
      </div>
    </div>
  )
}

export default App