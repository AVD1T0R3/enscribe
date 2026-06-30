import { AddNoteButton } from '@/components/AddNoteButton'
import { createFileRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-center font-semibold">You have no notes</h1>
      <AddNoteButton/>
    </div>
  )
}
