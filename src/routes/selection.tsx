import drillData from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Selection() {
  return (
    <>
      <h2 className="text-xl">OSzk</h2>
      <Link to="/drills">
        <Button className="w-full">
          All parts
        </Button>
      </Link>
      {drillData.map((drill, i) => (
        <Link key={i} to={`/drill/${drill.section}`}>
          <Button
            key={i}
            variant='outline'
            className="w-full"
          >
            Part {drill.section}: {drill.name}
          </Button>
        </Link>
      ))}
    </>
  )
}

export default Selection
