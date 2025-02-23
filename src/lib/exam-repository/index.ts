import { Result, Section, Statement } from "../common/types";
import { examData } from "./data";

function getSingleSection({ uuid }: { uuid: string }): Result<Section> {
  const foundSection = examData.find((section) => section.uuid === uuid);

  if (!foundSection) {
    return [null, new Error("Section not found")];
  }

  return [foundSection, null];
}

function getAllSections(): Result<Section[]> {
  return [examData, null];
}

function getSingleStatement({ uuid }: { uuid: string }): Result<Statement> {
  const foundStatement = examData
    .map((section) => section.statements)
    .flat()
    .find((statement) => statement.uuid === uuid);

  if (!foundStatement) {
    return [null, new Error("Statement not found")];
  }

  return [foundStatement, null];
}

function getAllStatements(): Result<Statement[]> {
  const allStatements = examData.map((section) => section.statements).flat();

  return [allStatements, null];
}

function getRandomStatements({
  count = 5,
  sections,
}: {
  count?: number;
  sections?: string[]; // if omitted, all sections are used
}): Result<Statement[]> {
  const filteredSections = examData.filter((section) =>
    sections ? sections.includes(section.uuid) : true,
  );

  const allStatements = filteredSections
    .map((section) => section.statements)
    .flat();

  if (allStatements.length < count) {
    return [null, new Error("Not enough statements")];
  }

  const randomStatements = allStatements
    .sort(() => Math.random() - 0.5)
    .slice(0, count);

  return [randomStatements, null];
}

export const examRepository = {
  getSingleSection,
  getAllSections,
  getSingleStatement,
  getAllStatements,
  getRandomStatements,
};

export default examRepository;
