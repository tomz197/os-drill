import { Statement } from "@/lib/common/types";
import examRepository from "@/lib/exam-repository";
import { useEffect, useState, useCallback } from "react";
import { redirect } from "react-router-dom";
import { StatementsForm } from "@/components/common/statements-form";

export function ExamAllPage() {
  const [trueStatements, setTrueStatements] = useState<Statement[]>([]);
  const [falseStatements, setFalseStatements] = useState<Statement[]>([]);

  const resetStatements = useCallback(() => {
    const [statements, error] = examRepository.getRandomStatements({
      count: 5,
    });

    if (error) {
      console.error("Statements not found");
      redirect("/");
      return;
    }

    setTrueStatements(statements.slice(0, 2));
    setFalseStatements(statements.slice(2, 5));
  }, []);

  useEffect(() => {
    resetStatements();
  }, [resetStatements]);

  if (!trueStatements || !falseStatements) return null;

  return (
    <StatementsForm
      title={"Všechny části"}
      correct={trueStatements}
      incorrect={falseStatements}
      refresh={resetStatements}
    />
  );
}
