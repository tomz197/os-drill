import ExamQuestionForm from "@/components/exam-question-form";
import { CorrectIncorrect, examRepository } from "@/lib/exam-repository";
import { useCallback, useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";

function ExamPart() {
  const { section } = useParams();

  const [question, setQuestion] = useState<CorrectIncorrect | null>(null);

  const resetQuestion = useCallback(() => {
    if (!section) {
      console.error("Section or name not found");
      redirect("/");
      return;
    }

    const drill = examRepository.getDrillSingle({ section: parseInt(section) });
    if (!drill) {
      console.error("Drill not found");
      redirect("/");
      return;
    }

    setQuestion(examRepository.getCorrectIncorrect(drill));
  }, [section]);

  useEffect(() => {
    resetQuestion();
  }, [resetQuestion]);

  if (!question) return null;

  return (
    <>
      <h2 className="text-xl">
        Část: {section}:{" "}
        {!section
          ? ""
          : examRepository.getDrillSingle({ section: parseInt(section) })
              ?.name ?? ""}
      </h2>
      <div>
        <ExamQuestionForm facts={question} resetQuestion={resetQuestion} />
      </div>
    </>
  );
}

export default ExamPart;
