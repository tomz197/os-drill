import QuestionForm from "@/components/question-form";
import { getCorrectIncorrect, getDrills } from "@/lib/utils";
import { redirect } from "react-router-dom";

function AllParts() {
  const drill = getDrills()
  if (!drill) {
    console.error("Drill not found")
    redirect("/");
    return null
  }

  const correctIncorrect = getCorrectIncorrect(drill)

  return (
    <>
      <h2 className="text-xl">All parts</h2>
      <div>
        <QuestionForm facts={correctIncorrect} />
      </div>
    </>
  )
}

export default AllParts
