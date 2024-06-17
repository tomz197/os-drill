import ExamQuestionForm from "@/components/exam-question-form";
import { getCorrectIncorrect, getDrills } from "@/lib/utils";
import { redirect } from "react-router-dom";

function ExamAllParts() {
  const drill = getDrills()
  if (!drill) {
    console.error("Drill not found")
    redirect("/");
    return null
  }

  const correctIncorrect = getCorrectIncorrect(drill)

  return (
    <>
      <h2 className="text-xl">Všechny části</h2>
      <div>
        <ExamQuestionForm facts={correctIncorrect} />
      </div>
    </>
  )
}

export default ExamAllParts
