export type Statement = {
  uuid: string; // UUID
  correct: string; // Correct(true) statement
  incorrect: string; // Incorrect(false) statement
  sectionNumber?: string; // Section number (e.g. "1.1") NOTE: Optional because of exams
  sectionTitle?: string; // Section title (e.g. "Virtualizace paměti") NOTE: Optional because of exams
};

export type Section = {
  uuid: string; // UUID
  sectionNumber: string; // Section number (e.g. "1.1")
  sectionTitle: string; // Section title (e.g. "Virtualizace paměti")
  statements: Statement[]; // List of statements
};

export type Result<T> = [T, null] | [null, Error];

export type SectionStats = {
  sectionId: string; // UUID of the section
  totalAttempts: number; // Total number of attempts
  correctAttempts: number; // Number of correct attempts
  rightStatements: number; // Number of statements with correct last attempt
  wrongStatements: number; // Number of statements with incorrect last attempt
  totalStatements: number; // Total number of statements
};

export type SectionStatsMap = {
  [sectionId: string]: SectionStats;
};
