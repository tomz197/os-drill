import ExamQuestionForm from "@/components/exam-question-form";
import { CorrectIncorrect, examRepository } from "@/lib/exam-repository";
import { useCallback, useEffect, useState } from "react";
import { redirect } from "react-router-dom";

function ExamAllParts() {
  const [question, setQuestion] = useState<CorrectIncorrect | null>(null);

  const resetQuestion = useCallback(() => {
    const drill = examRepository.getDrillMany();
    if (!drill) {
      console.error("Drill not found");
      redirect("/");
      return null;
    }
    setQuestion(examRepository.getCorrectIncorrect(drill));
  }, []);

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
