import { Button } from "@/components/ui/button";
import { Github, Copy, Download, Upload, Import } from "lucide-react";
import Discord from "@/assets/discord-icon";
import { Link, Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { StorageController } from "@/lib/controllers/storage-controller";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";

function StatsDialog() {
  const [statsText, setStatsText] = useState("");

  const handleCopyStats = () => {
    const [stats, error] = StorageController.getInstance().getCopyableStats();
    if (error) {
      alert("Failed to copy stats");
      return;
    }
    navigator.clipboard.writeText(stats);
    alert("Stats copied to clipboard");
  };

  const handleDownloadStats = () => {
    const [stats, error] = StorageController.getInstance().getCopyableStats();
    if (error) {
      alert("Failed to download stats");
      return;
    }
    
    const blob = new Blob([stats], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'os-drill-stats.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setStatsText(content);
    };
    reader.readAsText(file);
  };

  const handlePasteStats = () => {
    try {
      const stats = JSON.parse(statsText);
      const [_, error] = StorageController.getInstance().setStats(stats);
      if (error) {
        alert(error.message);
        return;
      }
      alert("Stats imported successfully");
      window.location.reload();
    } catch (error) {
      alert("Invalid stats format");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-grey-400 hover:text-blue-500">
          Stats
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Stats Management</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">
              Your stats help us provide a better learning experience by tracking which statements you've seen and how well you know them.
            </p>
            <p className="mb-2">
              We use this information to:
            </p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Prioritize statements you haven't seen yet</li>
              <li>Focus on statements you've struggled with</li>
              <li>Track your progress over time</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleCopyStats}>
              <Copy className="w-4 h-4 mr-2" />
              Copy Stats
            </Button>
            <Button onClick={handleDownloadStats}>
              <Download className="w-4 h-4 mr-2" />
              Download Stats
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild variant="outline">
              <label className="cursor-pointer">
                <Upload className="w-4 h-4 mr-2" />
                Upload Stats
                <input
                  type="file"
                  accept=".txt"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </Button>
            <Textarea
              placeholder="Paste stats here..."
              value={statsText}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setStatsText(e.target.value)}
              className="min-h-[200px]"
            />
            <Button onClick={handlePasteStats}>
              <Import className="w-4 h-4 mr-2 mt-1" />
              Import Stats
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

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
        <div className="h-6 w-[0.1rem] bg-border rounded-full"></div>
        <StatsDialog />
      </footer>
    </>
  );
}

export default Root;
