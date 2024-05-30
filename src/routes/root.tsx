import { Button } from "@/components/ui/button"
import { Outlet } from "react-router-dom"

function Root() {
  return (
    <>
      <header className='p-4 flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>OSzk drill</h1>
        <a href='https://github.com/tomz197/os-drill' target="_blank">
          <Button variant="outline">How to use</Button>
        </a>
      </header>
      <main className='p-4 border-y flex flex-col gap-2'>
        <Outlet />
      </main>
      <footer className='p-4'>
        <a href='https://github.com/tomz197/os-drill' target="_blank" className='text-grey-400 hover:text-blue-500'>
          Github
        </a>
      </footer>
    </>
  )
}

export default Root
