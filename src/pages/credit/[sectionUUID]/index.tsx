import { Section, Statement } from "@/lib/common/types";
import creditRepository from "@/lib/credit-repository";
import { useEffect, useState, useCallback } from "react";
import { redirect, useParams } from "react-router-dom";
import { StatementsForm } from "@/components/common/statements-form";

export function CreditPage() {
  const { sectionUUID } = useParams();

  const [section, setSection] = useState<Section | null>(null);
  const [trueStatements, setTrueStatements] = useState<Statement[]>([]);
  const [falseStatements, setFalseStatements] = useState<Statement[]>([]);

  useEffect(() => {
    if (!sectionUUID) {
      console.error("Section not found");
      redirect("/");
      return;
    }
    const [foundSection, error] = creditRepository.getSingleSection({
      uuid: sectionUUID,
    });

    if (error) {
      console.error("Section not found");
      redirect("/");
      return;
    }

    setSection(foundSection);
  }, [sectionUUID]);

  const resetStatements = useCallback(() => {
    if (!sectionUUID) {
      console.error("Section or name not found");
      redirect("/");
      return;
    }

    const [statements, error] = creditRepository.getRandomStatements({
      count: 5,
      sections: [sectionUUID],
    });

    if (error) {
      console.error("Statements not found");
      redirect("/");
      return;
    }

    setTrueStatements(statements.slice(0, 3));
    setFalseStatements(statements.slice(3, 5));
  }, [section]);

  useEffect(() => {
    resetStatements();
  }, [resetStatements]);

  if (!trueStatements || !falseStatements || !section) return null;

  return (
    <StatementsForm
      title={section?.title}
      correct={trueStatements}
      incorrect={falseStatements}
      refresh={resetStatements}
    />
  );
}
