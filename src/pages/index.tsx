import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";
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

import { creditData } from "@/lib/credit-repository/data";
import { examData } from "@/lib/exam-repository/data";
import { Section } from "@/lib/common/types";

function LandingPage() {
  const navigate = useNavigate();
  const [isCreditDialogOpen, setIsCreditDialogOpen] = useState(false);
  const [isExamDialogOpen, setIsExamDialogOpen] = useState(false);

  const handleCreditSectionSubmit = (selectedSections: string[]) => {
    const queryParams = new URLSearchParams();
    selectedSections.forEach(section => {
      queryParams.append('sections', section);
    });
    
    navigate(`/credit-custom?${queryParams.toString()}`);
    setIsCreditDialogOpen(false);
  };

  const handleExamSectionSubmit = (selectedSections: string[]) => {
    const queryParams = new URLSearchParams();
    selectedSections.forEach(section => {
      queryParams.append('sections', section);
    });
    
    navigate(`/exam-custom?${queryParams.toString()}`);
    setIsExamDialogOpen(false);
  };

  return (
    <>
      <p className="font-light mb-4 text-sm ">
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
          <h2 className="text-xl">Zápočet</h2>
          <div className="grid grid-cols-2 gap-1">
            <Link to="/credit">
              <Button className="w-full">Všechny části</Button>
            </Link>
          
            <SectionsDialog 
              isOpen={isCreditDialogOpen} 
              onOpenChange={setIsCreditDialogOpen}
              onSubmit={handleCreditSectionSubmit}
              sections={creditData}
            />
          </div>
          {creditData.map((drill, i) =>  (
            <Link key={i} to={`/credit/${drill.uuid}`} >
              <Button key={i} variant="outline" className="w-full">
                Část {drill.sectionNumber}: {drill.sectionTitle}
              </Button>
            </Link>
          ))}
        </div>

        <div className="h-[0.1rem] md:h-full w-full md:w-[0.1rem] bg-border rounded-full"></div>

        <div className="flex flex-col gap-1">
          <h2 className="text-xl">Zkouška</h2>
          <div className="grid grid-cols-2 gap-1">
            <Link to="/exam">
              <Button className="w-full">Všechny části</Button>
            </Link>
            
            <SectionsDialog 
              isOpen={isExamDialogOpen} 
              onOpenChange={setIsExamDialogOpen}
              onSubmit={handleExamSectionSubmit}
              sections={examData}
            />
          </div>
          {examData.map((drill, i) => (
            <Link key={i} to={`/exam/${drill.uuid}`}>
              <Button key={i} variant="outline" className="w-full">
                Část {drill.sectionNumber}: {drill.sectionTitle}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </>
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
    setSelectedSections(prev => 
      prev.includes(sectionUUID)
        ? prev.filter(id => id !== sectionUUID)
        : [...prev, sectionUUID]
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
            <div key={section.uuid} className="flex items-center space-x-2 mb-2">
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
