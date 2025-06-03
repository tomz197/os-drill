import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Section, type Statement } from "./common/types";
import { type StoredSectionStats } from "./controllers/storage-controller";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

export function generateKey(pre: string): string {
  return `${pre}_${new Date().getTime()}`;
}

export function getPrioritizedStatements(
  section: Section,
  stats: StoredSectionStats | null,
  count: number
): Statement[] {
  if (!stats) {
    return shuffle(section.statements).slice(0, count);
  }

  const wrongStatements: Statement[] = [];
  const rightStatements: Statement[] = [];
  const unseenStatements: Statement[] = [];

  section.statements.forEach((statement) => {
    const statementStats = stats.statements[statement.uuid];
    
    if (!statementStats) {
      unseenStatements.push(statement);
    } else if (!statementStats.lastAttemptCorrect) {
      wrongStatements.push(statement);
    } else {
      rightStatements.push(statement);
    }
  });

  const shuffledWrong = shuffle(wrongStatements);
  const shuffledRight = shuffle(rightStatements);
  const shuffledUnseen = shuffle(unseenStatements);

  const result: Statement[] = [];

  if (shuffledWrong.length > 0) {
    result.push(shuffledWrong[0]);
  }

  /* uncomment this to enable prioritizing right statements
  if (shuffledRight.length > 0) {
    result.push(shuffledRight[0]); 
  }
  */

  const remainingSlots = count - result.length;

  const unseenToAdd = Math.min(remainingSlots, shuffledUnseen.length);
  result.push(...shuffledUnseen.slice(0, unseenToAdd));

  if (result.length < count) {
    const remainingWrong = shuffledWrong.slice(1);
    const remainingRight = shuffledRight.slice(1);
    
    while (result.length < count) {
      if (remainingWrong.length > 0) {
        result.push(remainingWrong.shift()!);
      }
      if (result.length < count && remainingRight.length > 0) {
        result.push(remainingRight.shift()!);
      }

      if (remainingWrong.length === 0 && remainingRight.length === 0) {
        break;
      }
    }
  }

  return result;
}

