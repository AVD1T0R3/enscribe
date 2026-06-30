import { Outlet, createRootRoute } from '@tanstack/react-router'
import {AddNoteButton} from '@/components/AddNoteButton'
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
    <div className='bg-gray-200 p-4 text-white text-2xl flex items-center justify-center gap-8'>
        <p className='text-gray-950'>Abel's Vault</p>
        <AddNoteButton/> 
        </div>
      <Outlet />
      
    </>
  )
}
