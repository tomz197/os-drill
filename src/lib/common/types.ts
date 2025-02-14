export type Statement = {
  uuid: string; // UUID
  correct: string; // Correct(true) statement
  incorrect: string; // Incorrect(false) statement
};

export type Section = {
  uuid: string; // UUID
  title: string; // Title of the section
  statements: Statement[]; // List of statements
};

export type Result<T> = [T, null] | [null, Error];
