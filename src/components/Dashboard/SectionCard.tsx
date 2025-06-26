import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  actionText?: string;
  onClick?: () => void;
  progress?: number;
}

const SectionCard = ({
  title = "Section Title",
  description = "This is a description of the section and what you can expect to find here.",
  icon = (
    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"></div>
  ),
  actionText = "Explore",
  onClick = () => {},
  progress,
}: SectionCardProps) => {
  return (
    <Card className="w-full h-full bg-card overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className="text-primary">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground min-h-[60px]">
          {description}
        </CardDescription>

        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          onClick={onClick}
          variant="ghost"
          className="w-full justify-between hover:bg-primary/10"
        >
          {actionText}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SectionCard;
