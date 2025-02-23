import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";

import { creditData } from "@/lib/credit-repository/data";
import { examData } from "@/lib/exam-repository/data";

function LandingPage() {
  return (
    <>
      <p className="font-light mb-4 text-sm ">
        Tato aplikace slouží na procvičení znalostí z předmětu PB152.
        <br /> Akékoliv chyby, připomínky, nápady na vylepšení, nebo návrhy na
        nové otázky můžete nahlásit na{" "}
        <a
          href="https://discord.gg/ztabDQ4jNv"
          className="underline hover:text-blue-500"
          target="_blank"
        >
          Discord
          <LinkIcon className="w-3 h-3 inline self-center" />
        </a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl">Zápočet</h2>
          <Link to="/credit">
            <Button className="w-full">Všechny části</Button>
          </Link>
          {creditData.map((drill, i) => (
            <Link key={i} to={`/credit/${drill.uuid}`}>
              <Button key={i} variant="outline" className="w-full">
                {drill.title}
              </Button>
            </Link>
          ))}
        </div>

        <div className="h-[0.1rem] md:h-full w-full md:w-[0.1rem] bg-border rounded-full"></div>

        <div className="flex flex-col gap-1">
          <h2 className="text-xl">Zkouška</h2>
          <Link to="/exam">
            <Button className="w-full">Všechny části</Button>
          </Link>
          {examData.map((drill, i) => (
            <Link key={i} to={`/exam/${drill.uuid}`}>
              <Button key={i} variant="outline" className="w-full">
                {drill.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
