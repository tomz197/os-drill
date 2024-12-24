import drillData from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Selection() {
  return (
    <>
      <h2 className="text-xl">Zkouška</h2>
      <Link to="/zkouska">
        <Button className="w-full">Všechny části</Button>
      </Link>
      {drillData.map((drill, i) => (
        <Link key={i} to={`/zkouska/${drill.section}`}>
          <Button key={i} variant="outline" className="w-full">
            Část {drill.section}: {drill.name}
          </Button>
        </Link>
      ))}
      <h2 className="text-xl">Zápočet</h2>
      <a
        href="https://github.com/Futupas/PB152OperackyDrill/tree/main"
        target="_blank"
      >
        <Button className="w-full">Zde najdete zápočet</Button>
      </a>
    </>
  );
}

export default Selection;
