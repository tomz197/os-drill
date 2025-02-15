import { Statement } from "@/lib/common/types";
import { Checkbox } from "../ui/checkbox";
import { useMemo, useState } from "react";
import { cn, generateKey, shuffle } from "@/lib/utils";
import { Check, Link, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      <div>
        <h2 className="text-2xl">{title}</h2>
        <p className="font-medium text-sm">
          Zaškrtněte správné výroky({correct.length})
        </p>
      </div>
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
      <div className="w-full flex justify-end">
        <ReportIssue />
      </div>
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
        (type == "correct" ? (
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

function ReportIssue() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Nahlásit chybu</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Vyberte si jak nahlásit chybu</DialogTitle>
          <DialogDescription>
            Nahlášení chyby můžete provést buď přes Discord nebo přes Github.
            <br />
            <br />
            Pokud chcete nahlásit chybu přes Discord, pripojte se na náš server
            a napište nám (
            <a
              href="https://discord.gg/ztabDQ4jNv"
              className="underline text-foreground hover:text-blue-500"
              target="_blank"
            >
              link pro připojení
              <Link className="w-3 h-3 inline self-center" />
            </a>
            ).
            <br />
            <br />
            Pokud chcete nahlásit chybu přes Github, vytvořte issue(
            <a
              href="https://github.com/tomz197/os-drill/issues/new"
              className="underline text-foreground hover:text-blue-500"
              target="_blank"
            >
              link pro vytoření issue
              <Link className="w-3 h-3 inline self-center" />
            </a>
            ).
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default StatementsForm;
