import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header className="p-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-semibold">PB152 procvičení</h1>
        </Link>
        <a
          href="https://github.com/tomz197/os-drill"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline">Více info</Button>
        </a>
      </header>
      <main className="p-4 border-y flex flex-col gap-2">
        <Outlet />
      </main>
      <footer className="p-4 text-center">
        <a
          href="https://github.com/tomz197/os-drill"
          target="_blank"
          className="text-grey-400 hover:text-blue-500"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </>
  );
}

export default Root;
