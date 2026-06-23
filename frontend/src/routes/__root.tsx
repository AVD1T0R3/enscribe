import { Outlet, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
    <div className='bg-gray-500 p-4 text-white text-2xl flex items-center justify-center gap-5'>
        <p>Abel's Vault</p> 
        <button className='bg-amber-300 text-gray-900 font-semibold px-4 rounded-full cursor-pointer
        hover:bg-amber-500 active:bg-amber-700 active:scale-98 flex items-center justify-center py-2 px-5' >Add note</button>
        </div>
      <Outlet />
      
    </>
  )
}
