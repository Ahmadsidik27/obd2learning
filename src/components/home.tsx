import React from "react";
import DashboardLayout from "./Dashboard/DashboardLayout";
import ContentSection from "./Dashboard/ContentSection";
import ProgressTracker from "./Dashboard/ProgressTracker";
import SectionCard from "./Dashboard/SectionCard";
import {
  BookOpen,
  Code,
  FileVideo,
  Gauge,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";

const sections = [
  {
    id: "courses",
    title: "Course Modules",
    description: "Comprehensive learning paths for automotive diagnostics",
    icon: <GraduationCap className="h-10 w-10" />,
    color: "bg-blue-100 dark:bg-blue-950",
  },
  {
    id: "codes",
    title: "OBD2 Code Library",
    description: "Extensive database of diagnostic trouble codes",
    icon: <Code className="h-10 w-10" />,
    color: "bg-green-100 dark:bg-green-950",
  },
  {
    id: "videos",
    title: "Video Tutorials",
    description: "Step-by-step visual guides for diagnostics and repairs",
    icon: <FileVideo className="h-10 w-10" />,
    color: "bg-yellow-100 dark:bg-yellow-950",
  },
  {
    id: "simulator",
    title: "Scanner Simulator",
    description: "Practice diagnostic procedures in a virtual environment",
    icon: <Gauge className="h-10 w-10" />,
    color: "bg-purple-100 dark:bg-purple-950",
  },
  {
    id: "parts",
    title: "Spare Parts Store",
    description: "Find compatible parts for your vehicle repairs",
    icon: <ShoppingCart className="h-10 w-10" />,
    color: "bg-red-100 dark:bg-red-950",
  },
  {
    id: "ebooks",
    title: "Technical Ebooks",
    description: "In-depth knowledge resources for automotive professionals",
    icon: <BookOpen className="h-10 w-10" />,
    color: "bg-indigo-100 dark:bg-indigo-950",
  },
];

const HomePage = () => {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  return (
    <DashboardLayout>
      {activeSection ? (
        <ContentSection
          sectionId={activeSection}
          onBack={() => setActiveSection(null)}
        />
      ) : (
        <div className="bg-background p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">OBD2 Learning Platform</h1>
            <p className="text-muted-foreground">
              Welcome to your comprehensive automotive diagnostic learning
              dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {sections.map((section) => (
              <SectionCard
                key={section.id}
                title={section.title}
                description={section.description}
                icon={section.icon}
                color={section.color}
                onClick={() => setActiveSection(section.id)}
              />
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Your Learning Progress
            </h2>
            <ProgressTracker />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default HomePage;
