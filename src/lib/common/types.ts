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
