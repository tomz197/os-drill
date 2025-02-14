import drillData from "@/lib/exam-repository/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { creditData } from "@/lib/credit-repository/data";

function LandingPage() {
  return (
    <>
      <h2 className="text-xl">Zkouška</h2>
      <Link to="/exam">
        <Button className="w-full">Všechny části</Button>
      </Link>
      {drillData.map((drill, i) => (
        <Link key={i} to={`/exam/${drill.section}`}>
          <Button key={i} variant="outline" className="w-full">
            Část {drill.section}: {drill.name}
          </Button>
        </Link>
      ))}
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
    </>
  );
}

export default LandingPage;
