import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Discord from "@/assets/discord-icon";
import { Link, Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

function Root() {
  return (
    <>
      <header className="px-4 py-1 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold">
            PB152<span className="text-xl font-light">drill</span>
          </h1>
        </Link>
        <div className="flex gap-1 items-center">
          <Link to="/about">
            <Button variant="ghost">O nás</Button>
          </Link>
          <div className="h-6 w-[0.1rem] bg-border rounded-full"></div>
          <ThemeToggle />
          <div className="h-6 w-[0.1rem] bg-border rounded-full"></div>
          <a href="https://github.com/tomz197/os-drill" target="_blank">
            <Button variant="ghost" size="icon">
              <Github />
            </Button>
          </a>
        </div>
      </header>
      <div className="h-[0.1rem] w-full bg-border rounded-full"></div>
      <main className="p-4 flex flex-col flex-1 gap-2">
        <Outlet />
      </main>
      <div className="h-[0.1rem] w-full bg-border rounded-full"></div>
      <footer className="p-4 flex justify-center gap-2">
        <a
          href="https://github.com/tomz197/os-drill"
          target="_blank"
          className="text-grey-400 hover:text-blue-500 flex items-center gap-1"
        >
          Github
          <Github className="w-5 h-5 inline" />
        </a>
        <div className="h-6 w-[0.1rem] bg-border rounded-full"></div>
        <a
          href="https://discord.gg/ztabDQ4jNv"
          className="text-grey-400 hover:text-blue-500 flex items-center gap-1"
          target="_blank"
        >
          Discord
          <Discord className="w-6 h-6 stroke-[1.5] inline" />
        </a>
      </footer>
    </>
  );
}

export default Root;
