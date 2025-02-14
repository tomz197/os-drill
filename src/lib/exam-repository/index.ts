import drillData, { Drill } from "@/lib/exam-repository/data";

interface getDrillProps {
  section?: number;
  name?: string;
}

function getDrillSingle({ section, name }: getDrillProps): Drill | null {
  switch (true) {
    case !section:
      return drillData.find((drill) => drill.name === name) ?? null;
    case !name:
      return drillData.find((drill) => drill.section === section) ?? null;
    default:
      return null;
  }
}

function getDrillMany(): Drill {
  return {
    section: -1,
    name: "All parts",
    correct: drillData.flatMap((drill) => drill.correct),
    incorrect: drillData.flatMap((drill) => drill.incorrect),
  };
}

export type CorrectIncorrect = {
  fact: string;
  isCorrect: boolean;
  correct: string | null;
}[];
function getCorrectIncorrect(drill: Drill): CorrectIncorrect {
  if (drill.correct.length !== drill.incorrect.length) {
    throw new Error("Correct and incorrect arrays must have the same length");
  }
  const length = drill.correct.length;
  const pickedFacts = new Array(5).fill(() =>
    Math.floor(Math.random() * length),
  );

  const correctNum = 2;
  const incorrectNum = 3;

  const result: CorrectIncorrect = [];

  for (let i = 0; i < correctNum; i++) {
    const index = pickedFacts[i]();
    result.push({
      fact: drill.correct[index],
      isCorrect: true,
      correct: null,
    });
  }

  for (let i = 0; i < incorrectNum; i++) {
    const index = pickedFacts[i + correctNum]();
    result.push({
      fact: drill.incorrect[index],
      isCorrect: false,
      correct: drill.correct[index],
    });
  }

  // Shuffle the array
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result;
}

export const examRepository = {
  getDrillSingle,
  getDrillMany,
  getCorrectIncorrect,
};

export default examRepository;
