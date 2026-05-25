import type { Email } from "../types/email";

export const emails: Email[] = [
  {
    id: 1,
    sender: "LinkedIn",
    subject: "Frontend Developer Opportunity",
    preview: "We found a new role matching your profile...",
    time: "10:30 AM",
    unread: true,
    starred: true,
  },
  {
    id: 2,
    sender: "GitHub",
    subject: "New Pull Request Review",
    preview: "A new review was requested in your repository...",
    time: "9:12 AM",
    unread: false,
    starred: false,
  },
  {
    id: 3,
    sender: "Figma",
    subject: "Design File Updated",
    preview: "Your team updated the dashboard designs...",
    time: "Yesterday",
    unread: true,
    starred: false,
  },
  {
    id: 4,
    sender: "Vercel",
    subject: "Deployment Successful",
    preview: "Your production deployment is live now...",
    time: "Yesterday",
    unread: false,
    starred: true,
  },
];