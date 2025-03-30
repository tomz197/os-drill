import { Section, Statement } from "@/lib/common/types";
import examRepository from "@/lib/exam-repository";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { StatementsForm } from "@/components/common/statements-form";

export function ExamCustomPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [trueStatements, setTrueStatements] = useState<Statement[]>([]);
  const [falseStatements, setFalseStatements] = useState<Statement[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedSectionUUIDs, setSelectedSectionUUIDs] = useState<string[]>([]);

  useEffect(() => {
    // Get sections from URL params
    const sectionParams = searchParams.getAll('sections');
    
    if (!sectionParams || sectionParams.length === 0) {
      console.error("No sections selected");
      navigate('/');
      return;
    }
    
    setSelectedSectionUUIDs(sectionParams);
    
    // Load section names for display
    const [allSections, error] = examRepository.getAllSections();
    if (error) {
      console.error("Failed to load sections");
      return;
    }
    
    setSections(allSections.filter(section => sectionParams.includes(section.uuid)));
  }, [searchParams, navigate]);

  const resetStatements = useCallback(() => {
    if (selectedSectionUUIDs.length === 0) {
      return;
    }

    const [statements, error] = examRepository.getRandomStatements({
      count: 5,
      sections: selectedSectionUUIDs,
    });

    if (error) {
      console.error("Statements not found", error);
      return;
    }

    setTrueStatements(statements.slice(0, 2));
    setFalseStatements(statements.slice(2, 5));
  }, [selectedSectionUUIDs]);

  useEffect(() => {
    if (selectedSectionUUIDs.length > 0) {
      resetStatements();
    }
  }, [selectedSectionUUIDs, resetStatements]);

  if (selectedSectionUUIDs.length === 0 || !trueStatements.length || !falseStatements.length) {
    return <div className="p-8 text-center">Načítání...</div>;
  }

  const sectionTitles = sections.map(s => `${s.sectionNumber}: ${s.sectionTitle}`).join(", ");

  return (
    <StatementsForm
      title={`Vlastní výběr: ${sectionTitles}`}
      correct={trueStatements}
      incorrect={falseStatements}
      refresh={resetStatements}
    />
  );
} 