import { Section, Statement } from "@/lib/common/types";
import examRepository from "@/lib/exam-repository";
import { useEffect, useState, useCallback } from "react";
import { redirect, useParams } from "react-router-dom";
import { StatementsForm } from "@/components/common/statements-form";

export function ExamPage() {
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
    const [foundSection, error] = examRepository.getSingleSection({
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

    const [res, error] = examRepository.getRandomStatements({
      count: 5,
      sections: [sectionUUID],
    });

    if (error) {
      console.error("Statements not found");
      redirect("/");
      return;
    }

    setTrueStatements(res.statements.slice(0, 2));
    setFalseStatements(res.statements.slice(2, 5));
  }, [sectionUUID]);

  useEffect(() => {
    resetStatements();
  }, [resetStatements]);

  if (!trueStatements || !falseStatements || !section) return null;

  return (
    <StatementsForm
      title={`Část ${section.sectionNumber}: ${section.sectionTitle}`}
      sectionId={sectionUUID!}
      correct={trueStatements}
      incorrect={falseStatements}
      refresh={resetStatements}
    />
  );
}
