import { Suspense, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Section } from "@/lib/common/types";
import BuyMeCoffee from "@/components/buy-me-coffee";
import creditRepository from "@/lib/credit-repository";
import examRepository from "@/lib/exam-repository";

const { creditData } = await import("@/lib/credit-repository/data");
const { examData } = await import("@/lib/exam-repository/data");

function LandingPage() {
  const navigate = useNavigate();
  const [isCreditDialogOpen, setIsCreditDialogOpen] = useState(false);
  const [isExamDialogOpen, setIsExamDialogOpen] = useState(false);

  const creditStats = useMemo(() => {
    const [stats, error] = creditRepository.getStats();
    if (error) {
      console.error(error);
      return null;
    }
    return stats;
  }, []);
  const examStats = useMemo(() => {
    const [stats, error] = examRepository.getStats();
    if (error) {
      console.error(error);
      return null;
    }
    return stats;
  }, []);

  const handleCreditSectionSubmit = (selectedSections: string[]) => {
    const queryParams = new URLSearchParams();
    selectedSections.forEach((section) => {
      queryParams.append("sections", section);
    });

    navigate(`/credit-custom?${queryParams.toString()}`);
    setIsCreditDialogOpen(false);
  };

  const handleExamSectionSubmit = (selectedSections: string[]) => {
    const queryParams = new URLSearchParams();
    selectedSections.forEach((section) => {
      queryParams.append("sections", section);
    });

    navigate(`/exam-custom?${queryParams.toString()}`);
    setIsExamDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 flex-1">
      <p className="font-light text-sm ">
        Tato aplikace slouží na procvičení znalostí z předmětu PB152.
        <br /> Akékoliv chyby, připomínky, nápady na vylepšení, nebo návrhy na
        nové otázky můžete nahlásit na{" "}
        <a
          href="https://discord.gg/ztabDQ4jNv"
          className="underline hover:text-blue-500"
          target="_blank"
        >
          Discord
          <LinkIcon className="w-3 h-3 inline self-center" />
        </a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl flex justify-between items-end">
            Zápočet{" "}
            <span className="text-muted-foreground text-sm">
              (správné / špatné / celkový počet)
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-1">
            <Link to="/credit">
              <Button className="w-full">Všechny části</Button>
            </Link>

            <Suspense fallback={<div>Loading...</div>}>
              <SectionsDialog
                isOpen={isCreditDialogOpen}
                onOpenChange={setIsCreditDialogOpen}
                onSubmit={handleCreditSectionSubmit}
                sections={creditData}
              />
            </Suspense>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            {creditData.map((drill, i) => (
              <Link key={i} to={`/credit/${drill.uuid}`}>
                <Button key={i} variant="outline" className="w-full">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left truncate mr-2">
                      Část {drill.sectionNumber}: {drill.sectionTitle}
                    </span>
                    <span className="text-right text-muted-foreground shrink-0">
                      <span className="text-green-600">{((creditStats?.[drill.uuid]?.rightStatements || 0) / drill.statements.length * 100).toFixed(0)}%</span>
                      {" / "}
                      <span className="text-red-600">{((creditStats?.[drill.uuid]?.wrongStatements || 0) / drill.statements.length * 100).toFixed(0)}%</span>
                      {" / "}
                      <span className="text-gray-600">{drill.statements.length}</span>
                    </span>
                  </div>
                </Button>
              </Link>
            ))}
          </Suspense>
        </div>

        <div className="h-[0.1rem] md:h-full w-full md:w-[0.1rem] bg-border rounded-full"></div>

        <div className="flex flex-col gap-1">
          <h2 className="text-xl flex justify-between items-end">
            Zkouška{" "}
            <span className="text-muted-foreground text-sm">
              (správné / špatné / celkový počet)
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-1">
            <Link to="/exam">
              <Button className="w-full">Všechny části</Button>
            </Link>

            <Suspense fallback={<div>Loading...</div>}>
              <SectionsDialog
                isOpen={isExamDialogOpen}
                onOpenChange={setIsExamDialogOpen}
                onSubmit={handleExamSectionSubmit}
                sections={examData}
              />
            </Suspense>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            {examData.map((drill, i) => (
              <Link key={i} to={`/exam/${drill.uuid}`}>
                <Button key={i} variant="outline" className="w-full">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-left">
                      Část {drill.sectionNumber}: {drill.sectionTitle}
                    </span>
                    <span className="text-right text-muted-foreground">
                      <span className="text-green-600">{((examStats?.[drill.uuid]?.rightStatements || 0) / drill.statements.length * 100).toFixed(0)}%</span>
                      {" / "}
                      <span className="text-red-600">{((examStats?.[drill.uuid]?.wrongStatements || 0) / drill.statements.length * 100).toFixed(0)}%</span>
                      {" / "}
                      <span className="text-gray-600">{drill.statements.length}</span>
                    </span>
                  </div>
                </Button>
              </Link>
            ))}
          </Suspense>
        </div>
      </div>
      <div className="flex justify-center items-center my-6 flex-1">
        <BuyMeCoffee />
      </div>
    </div>
  );
}

export default LandingPage;

function SectionsDialog({
  isOpen,
  onOpenChange,
  onSubmit,
  sections,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (selectedSections: string[]) => void;
  sections: Section[];
}) {
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const handleSectionToggle = (sectionUUID: string) => {
    setSelectedSections((prev) =>
      prev.includes(sectionUUID)
        ? prev.filter((id) => id !== sectionUUID)
        : [...prev, sectionUUID],
    );
  };

  const handleStartTest = () => {
    if (selectedSections.length === 0) {
      return;
    }

    onSubmit(selectedSections);
    setSelectedSections([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full">Vlastní výběr</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Vyberte části pro testování</DialogTitle>
          <DialogDescription>
            Vyberte jednu nebo více částí, ze kterých chcete být testováni.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto py-2">
          {sections.map((section) => (
            <div
              key={section.uuid}
              className="flex items-center space-x-2 mb-2"
            >
              <Checkbox
                id={section.uuid}
                checked={selectedSections.includes(section.uuid)}
                onCheckedChange={() => handleSectionToggle(section.uuid)}
              />
              <label
                htmlFor={section.uuid}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {section.sectionNumber}: {section.sectionTitle}
              </label>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button
            onClick={handleStartTest}
            disabled={selectedSections.length === 0}
          >
            Začít testování
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

