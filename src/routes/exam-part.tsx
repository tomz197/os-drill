import ExamQuestionForm from "@/components/exam-question-form";
import { getCorrectIncorrect, getDrill } from "@/lib/utils";
import { redirect, useParams } from "react-router-dom";

function ExamPart() {
  const { section } = useParams()
  if (!section) {
    console.error("Section or name not found")
    redirect("/");
    return null
  }

  const drill = getDrill({ section: parseInt(section) })
  if (!drill) {
    console.error("Drill not found")
    redirect("/");
    return null
  }

  const correctIncorrect = getCorrectIncorrect(drill)

  return (
    <>
      <h2 className="text-xl">Část: {section}: {drill.name}</h2>
      <div>
        <ExamQuestionForm facts={correctIncorrect} />
      </div>
    </>
  )
}

export default ExamPart
