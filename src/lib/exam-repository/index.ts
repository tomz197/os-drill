import { Result, Section, SectionStatsMap, Statement } from "../common/types";
import { StorageController } from "../controllers/storage-controller";
import { getPrioritizedStatements } from "../utils";

const { examData } = await import("./data");

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
}): Result<{
  statements: Statement[];
  section: Section;
}> {
  const filteredSections = examData.filter((section) =>
    sections ? sections.includes(section.uuid) : true,
  );

  const section =
    filteredSections[Math.floor(Math.random() * filteredSections.length)];

  if (section.statements.length < count) {
    return [null, new Error("Not enough statements")];
  }

  const storageController = StorageController.getInstance();
  const [sectionStats, _] = storageController.getStats(section.uuid);

  const randomStatements = getPrioritizedStatements(section, sectionStats, count);

  return [
    {
      statements: randomStatements,
      section,
    },
    null,
  ];
}

function getStats(): Result<SectionStatsMap> {
  const storageController = StorageController.getInstance();

  const sectionStatsMap: SectionStatsMap = {};

  for (const section of examData) {
    const [sectionStats, _] = storageController.getStats(section.uuid);

    sectionStatsMap[section.uuid] = {
      sectionId: section.uuid,
      totalAttempts: sectionStats?.totalAttempts || 0,
      correctAttempts: sectionStats?.correctAttempts || 0,
      rightStatements: sectionStats?.rightStatements || 0,
      wrongStatements: sectionStats?.wrongStatements || 0,
      totalStatements: section.statements.length,
    };
  }

  return [sectionStatsMap, null];
}

export const examRepository = {
  getSingleSection,
  getAllSections,
  getSingleStatement,
  getAllStatements,
  getRandomStatements,
  getStats,
};

export default examRepository;
