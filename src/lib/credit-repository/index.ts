import { Result, Section, SectionStatsMap, Statement } from "../common/types";
import { StorageController } from "../controllers/storage-controller";
import { getPrioritizedStatements } from "../utils";

const { creditData } = await import("./data");

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
}): Result<{
  statements: Statement[];
  section: Section;
}> {
  const filteredSections = creditData.filter((section) =>
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

  for (const section of creditData) {
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
export const creditRepository = {
  getSingleSection,
  getAllSections,
  getSingleStatement,
  getAllStatements,
  getRandomStatements,
  getStats,
};

export default creditRepository;
