import { Section, Statement } from "@/lib/common/types";
import creditRepository from "@/lib/credit-repository";
import { useEffect, useState, useCallback } from "react";
import { redirect } from "react-router-dom";
import { StatementsForm } from "@/components/common/statements-form";

export function CreditAllPage() {
  const [trueStatements, setTrueStatements] = useState<Statement[]>([]);
  const [falseStatements, setFalseStatements] = useState<Statement[]>([]);
  const [currentSection, setCurrentSection] = useState<Section | null>(null);

  const resetStatements = useCallback(() => {
    const [res, error] = creditRepository.getRandomStatements({
      count: 5,
    });

    if (error) {
      console.error("Statements not found");
      redirect("/");
      return;
    }

    setTrueStatements(res.statements.slice(0, 2));
    setFalseStatements(res.statements.slice(2, 5));
    setCurrentSection(res.section);
  }, []);

  useEffect(() => {
    resetStatements();
  }, [resetStatements]);

  if (!trueStatements || !falseStatements || !currentSection) return null;

  return (
    <StatementsForm
      title={"Všechny části"}
      sectionId={currentSection.uuid}
      correct={trueStatements}
      incorrect={falseStatements}
      refresh={resetStatements}
    />
  );
}
