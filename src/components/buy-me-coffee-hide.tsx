import { useState, useEffect } from "react";
import BuyMeCoffee from "./buy-me-coffee";
import { Button } from "@/components/ui/button";
import { EyeOff, Eye } from "lucide-react";

const STORAGE_KEY = "buy-me-coffee-hidden";

export default function BuyMeCoffeeHide() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const storedHidden = localStorage.getItem(STORAGE_KEY);
    if (storedHidden) {
      setIsHidden(storedHidden === "true");
    }
  }, []);

  const toggleHidden = () => {
    const newHiddenState = !isHidden;
    setIsHidden(newHiddenState);
    localStorage.setItem(STORAGE_KEY, String(newHiddenState));
  };

  if (isHidden) {
    return (
      <Button
        variant="outline"
        size="icon"
        onClick={toggleHidden}
        className="hover:bg-transparent"
      >
        <Eye className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <BuyMeCoffee />
      <Button
        variant="outline"
        size="icon"
        onClick={toggleHidden}
        className="hover:bg-transparent"
      >
        <EyeOff className="h-6 w-6" />
      </Button>
    </div>
  );
}
