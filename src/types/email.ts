export interface Email {
  id: number
  sender: string
  subject: string
  preview: string
  time: string
  unread: boolean
  starred: boolean
}