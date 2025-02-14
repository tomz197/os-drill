import { Result, Section, Statement } from "../common/types";
import { creditData } from "./data";

function getSingleSection({ uuid }: { uuid: string }): Result<Section> {
  const foundSection = creditData.find((section) => section.uuid === uuid);

  if (!foundSection) {
    return [null, new Error("Section not found")];
  }

  return [foundSection, null];
}

function getAllSections(): Result<Section[]> {
  return [creditData, null];
}

function getSingleStatement({ uuid }: { uuid: string }): Result<Statement> {
  const foundStatement = creditData
    .map((section) => section.statements)
    .flat()
    .find((statement) => statement.uuid === uuid);

  if (!foundStatement) {
    return [null, new Error("Statement not found")];
  }

  return [foundStatement, null];
}

function getAllStatements(): Result<Statement[]> {
  const allStatements = creditData.map((section) => section.statements).flat();

  return [allStatements, null];
}

function getRandomStatements({
  count = 5,
  sections,
}: {
  count?: number;
  sections?: string[]; // if omitted, all sections are used
}): Result<Statement[]> {
  const filteredSections = creditData.filter((section) =>
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

export const creditRepository = {
  getSingleSection,
  getAllSections,
  getSingleStatement,
  getAllStatements,
  getRandomStatements,
};

export default creditRepository;
