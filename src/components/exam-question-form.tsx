import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CorrectIncorrect, cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { useState } from "react";

function ExamQuestionForm({
  facts,
  resetQuestion: resetQuestionBase,
}: {
  facts: CorrectIncorrect;
  resetQuestion: () => void;
}) {
  const [selectedFacts, setSelectedFacts] = useState<CorrectIncorrect>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function resetQuestion() {
    setSelectedFacts([]);
    setIsSubmitted(false);
    resetQuestionBase();
  }

  return (
    <>
      {facts.map((item, i) => (
        <div
          key={i}
          className={cn([
            "p-2 flex gap-2 items-center",
            i !== 0 && " border-t ",
            isSubmitted && (item.isCorrect ? "bg-green-200" : "bg-red-200"),
            isSubmitted ? "cursor-default" : "cursor-pointer",
            isSubmitted
              ? item.isCorrect
                ? "hover:bg-green-300"
                : "hover:bg-red-300"
              : "hover:bg-gray-200",
          ])}
          onClick={() => {
            if (isSubmitted) return;
            if (selectedFacts.includes(item)) {
              setSelectedFacts((prev) =>
                prev.filter((fact) => fact.fact !== item.fact),
              );
            } else {
              setSelectedFacts((prev) => [...prev, item]);
            }
          }}
        >
          <Checkbox
            id={i + "-formCheckbox"}
            name="checkbox"
            className="pointer-events-none"
            checked={selectedFacts.includes(item)}
            disabled={isSubmitted}
          />

          <div className="flex-1">
            <DisplayFact
              fact={item.fact}
              correct={item.correct}
              isSubmitted={isSubmitted}
            />
          </div>

          {isSubmitted &&
            selectedFacts.includes(item) &&
            (item.isCorrect ? (
              <span className="text-green-500">
                <Check className="w-10 h-10" />
              </span>
            ) : (
              <span className="text-red-500">
                <X className="w-10 h-10" />
              </span>
            ))}
        </div>
      ))}
      <Button
        className="w-full mt-4"
        onClick={() => {
          if (isSubmitted) {
            resetQuestion();
            return;
          }
          setIsSubmitted(true);
        }}
      >
        {isSubmitted ? "Další otázka" : "Odeslat"}
      </Button>
    </>
  );
}

function DisplayFact({
  fact,
  correct,
  isSubmitted,
}: {
  fact: string;
  correct: string | null;
  isSubmitted: boolean;
}) {
  const [showCorrect, setShowCorrect] = useState(false);

  return (
    <>
      <p>{showCorrect ? correct : fact}</p>
      {isSubmitted && correct && (
        <div className="flex items-center pt-2 gap-2 select-none">
          <p
            onMouseDown={() => setShowCorrect(!showCorrect)}
            className="font-bold underline italic cursor-pointer"
          >
            {!showCorrect ? "zobrazit správnou" : "zobrazit nesprávnou"}
          </p>
          <p className="text-gray-600">
            {!showCorrect
              ? "(Zobrazuje se nesprávna odpověď)"
              : "(Zobrazuje se správna odpověď)"}
          </p>
        </div>
      )}
    </>
  );
}

export default ExamQuestionForm;
