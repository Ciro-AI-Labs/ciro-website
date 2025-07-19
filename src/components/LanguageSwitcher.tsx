import React from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2"
      disabled // Disabled since the app is English-only
    >
      <Globe className="h-4 w-4" />
      EN
    </Button>
  );
};

export default LanguageSwitcher; 