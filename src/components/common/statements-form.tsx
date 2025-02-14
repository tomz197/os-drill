import { Statement } from "@/lib/common/types";
import { Checkbox } from "../ui/checkbox";
import { useMemo, useState } from "react";
import { cn, generateKey, shuffle } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { Button } from "../ui/button";

export function StatementsForm({
  title,
  correct,
  incorrect,
  refresh,
}: {
  title: string;
  correct: Statement[];
  incorrect: Statement[];
  refresh: () => void;
}) {
  const [submited, setSubmited] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(
    new Array(correct.length + incorrect.length).fill(false),
  );

  const shuffledStatements = useMemo(() => {
    setChecked(new Array(correct.length + incorrect.length).fill(false));
    return shuffle([...correct, ...incorrect]);
  }, [correct, incorrect]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">{title}</h2>
      <div>
        {shuffledStatements.map((statement, i) => (
          <StatementCheckbox
            key={generateKey(statement.uuid)}
            statement={statement}
            type={
              correct.find((s) => s.uuid == statement.uuid)
                ? "correct"
                : "incorrect"
            }
            submited={submited}
            checked={checked[i]}
            onChange={(value) => {
              const newChecked = [...checked];
              newChecked[i] = value;
              setChecked(newChecked);
            }}
          />
        ))}
      </div>
      <Button
        className="w-full"
        onClick={() => {
          if (submited) {
            setSubmited(false);
            refresh();
          } else {
            setSubmited(true);
          }
        }}
      >
        {submited ? "Další otázka" : "Odeslat"}
      </Button>
    </div>
  );
}

function StatementCheckbox({
  statement,
  type,
  submited,
  checked,
  onChange,
}: {
  statement: Statement;
  type: "correct" | "incorrect";
  submited: boolean;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  const [showCorrect, setShowCorrect] = useState(type == "correct");

  return (
    <div
      className={cn([
        "p-2 flex gap-2 items-center",
        submited && (type == "correct" ? "bg-green-200" : "bg-red-200"),
        submited ? "cursor-default" : "cursor-pointer",
        submited
          ? type == "correct"
            ? "hover:bg-green-300"
            : "hover:bg-red-300"
          : "hover:bg-gray-200",
      ])}
      onClick={() => {
        if (submited) return;
        onChange(!checked);
      }}
    >
      <Checkbox
        id={statement.uuid}
        name={type}
        disabled={submited}
        checked={checked}
      />

      <div className="flex-1">
        <p>{showCorrect ? statement.correct : statement.incorrect}</p>
        {submited && type == "incorrect" && (
          <div className="flex items-center pt-2 gap-2 select-none">
            <p
              onMouseDown={() => setShowCorrect((prev) => !prev)}
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
      </div>

      {submited &&
        checked &&
        (type == "incorrect" ? (
          <span>
            <Check className="w-10 h-10" />
          </span>
        ) : (
          <span>
            <X className="w-10 h-10" />
          </span>
        ))}
    </div>
  );
}

export default StatementsForm;
