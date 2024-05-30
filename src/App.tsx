import drillData from "@/lib/data";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h2 className="text-xl">OSzk</h2>
      <Button>
        All parts
      </Button>
      {drillData.map((drill, i) => (
        <Button
          key={i}
          onClick={() => alert(drill.name)}
          variant='outline'
          className="text-start"
        >
          Part {drill.section}: {drill.name}
        </Button>
      ))}
    </>
  )
}

export default App
