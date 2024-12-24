import ExamQuestionForm from "@/components/exam-question-form";
import { CorrectIncorrect, getCorrectIncorrect, getDrills } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { redirect } from "react-router-dom";

function ExamAllParts() {
  const [question, setQuestion] = useState<CorrectIncorrect | null>(null);
  const drill = getDrills();

  const resetQuestion = useCallback(() => {
    if (!drill) {
      console.error("Drill not found");
      redirect("/");
      return null;
    }
    setQuestion(getCorrectIncorrect(drill));
  }, [drill]);

  useEffect(() => {
    resetQuestion();
  }, [resetQuestion]);

  if (!question) return null;

  return (
    <>
      <h2 className="text-xl">Všechny části</h2>
      <div>
        <ExamQuestionForm facts={question} resetQuestion={resetQuestion} />
      </div>
    </>
  );
}

export default ExamAllParts;
