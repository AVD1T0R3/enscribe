import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-center font-semibold">You have no notes</h1>
      <button className=' text-2xl text-gray-900 font-semibold rounded-full cursor-pointer
      bg-amber-300 hover:bg-amber-500 active:bg-amber-700 active:scale-98 flex items-center justify-center py-2 px-5' >Add note</button>
    </div>
  )
}
