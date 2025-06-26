import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search,
  BookOpen,
  Video,
  Wrench,
  ShoppingCart,
  BookText,
  Code,
} from "lucide-react";

interface ContentSectionProps {
  activeSection?: string;
}

const ContentSection = ({ activeSection = "courses" }: ContentSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full h-full bg-background p-4">
      <Card className="w-full h-full border shadow-sm">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold">
                {activeSection === "courses" && "Course Modules"}
                {activeSection === "codes" && "OBD2 Code Library"}
                {activeSection === "videos" && "Video Tutorials"}
                {activeSection === "simulator" && "Scanner Simulator"}
                {activeSection === "parts" && "Spare Parts Store"}
                {activeSection === "ebooks" && "Technical Ebooks"}
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-1">
                {activeSection === "courses" &&
                  "Browse and complete automotive diagnostic courses"}
                {activeSection === "codes" &&
                  "Search and learn about OBD2 diagnostic trouble codes"}
                {activeSection === "videos" &&
                  "Watch expert tutorials on diagnostic procedures"}
                {activeSection === "simulator" &&
                  "Practice using an OBD2 scanner in simulated scenarios"}
                {activeSection === "parts" &&
                  "Find compatible parts for your vehicle repairs"}
                {activeSection === "ebooks" &&
                  "Access technical documentation and reference materials"}
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={`Search ${activeSection}...`}
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm">
                Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={activeSection} className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="courses" className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Courses</span>
              </TabsTrigger>
              <TabsTrigger value="codes" className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">OBD2 Codes</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-1">
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Videos</span>
              </TabsTrigger>
              <TabsTrigger
                value="simulator"
                className="flex items-center gap-1"
              >
                <Wrench className="h-4 w-4" />
                <span className="hidden sm:inline">Simulator</span>
              </TabsTrigger>
              <TabsTrigger value="parts" className="flex items-center gap-1">
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden sm:inline">Parts</span>
              </TabsTrigger>
              <TabsTrigger value="ebooks" className="flex items-center gap-1">
                <BookText className="h-4 w-4" />
                <span className="hidden sm:inline">Ebooks</span>
              </TabsTrigger>
            </TabsList>

            <ScrollArea className="h-[500px] pr-4">
              <TabsContent value="courses" className="mt-0">
                <CoursesContent />
              </TabsContent>

              <TabsContent value="codes" className="mt-0">
                <CodesContent />
              </TabsContent>

              <TabsContent value="videos" className="mt-0">
                <VideosContent />
              </TabsContent>

              <TabsContent value="simulator" className="mt-0">
                <SimulatorContent />
              </TabsContent>

              <TabsContent value="parts" className="mt-0">
                <PartsContent />
              </TabsContent>

              <TabsContent value="ebooks" className="mt-0">
                <EbooksContent />
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

// Placeholder content components for each section
const CoursesContent = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to OBD2 Diagnostics",
      description:
        "Learn the fundamentals of OBD2 diagnostic systems and how to interpret basic codes.",
      progress: 65,
      lessons: 12,
      image:
        "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=800&q=80",
    },
    {
      id: 2,
      title: "Advanced Engine Diagnostics",
      description:
        "Deep dive into engine-related diagnostic procedures and troubleshooting techniques.",
      progress: 30,
      lessons: 15,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    },
    {
      id: 3,
      title: "Emissions Control Systems",
      description:
        "Understanding emissions systems, related OBD2 codes, and repair procedures.",
      progress: 0,
      lessons: 10,
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden">
          <div className="h-40 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm mb-2">
              <span>{course.lessons} lessons</span>
              <span>{course.progress}% complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <Button className="w-full mt-4">
              {course.progress > 0 ? "Continue Course" : "Start Course"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const CodesContent = () => {
  const codes = [
    {
      id: "P0171",
      description: "System Too Lean (Bank 1)",
      category: "Fuel and Air Metering",
      severity: "Medium",
    },
    {
      id: "P0300",
      description: "Random/Multiple Cylinder Misfire Detected",
      category: "Ignition System",
      severity: "High",
    },
    {
      id: "P0420",
      description: "Catalyst System Efficiency Below Threshold",
      category: "Emissions",
      severity: "Medium",
    },
    {
      id: "P0455",
      description: "Evaporative Emission System Leak Detected (large leak)",
      category: "Emissions",
      severity: "Low",
    },
    {
      id: "P0700",
      description: "Transmission Control System Malfunction",
      category: "Transmission",
      severity: "High",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        {codes.map((code) => (
          <Card key={code.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">{code.id}</CardTitle>
                <div
                  className={`px-2 py-1 rounded text-xs ${
                    code.severity === "High"
                      ? "bg-red-100 text-red-800"
                      : code.severity === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {code.severity}
                </div>
              </div>
              <CardDescription>{code.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Category:</span>
                  <span>{code.category}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Button variant="outline" size="sm">
                    Related Parts
                  </Button>
                  <Button size="sm">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const VideosContent = () => {
  const videos = [
    {
      id: 1,
      title: "How to Use an OBD2 Scanner",
      duration: "12:45",
      views: "24K",
      thumbnail:
        "https://images.unsplash.com/photo-1617886322168-72b886573c35?w=800&q=80",
    },
    {
      id: 2,
      title: "Diagnosing Check Engine Light",
      duration: "18:30",
      views: "15K",
      thumbnail:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80",
    },
    {
      id: 3,
      title: "Common OBD2 Code Fixes",
      duration: "22:15",
      views: "32K",
      thumbnail:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden">
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
              {video.duration}
            </div>
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{video.title}</CardTitle>
            <CardDescription>{video.views} views</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Watch Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const SimulatorContent = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>OBD2 Scanner Simulator</CardTitle>
          <CardDescription>
            Practice using an OBD2 scanner in virtual scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2">Select Vehicle</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="justify-start">
                  <div className="flex flex-col items-start">
                    <span>Toyota Camry</span>
                    <span className="text-xs text-muted-foreground">
                      2018-2022
                    </span>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start">
                  <div className="flex flex-col items-start">
                    <span>Honda Civic</span>
                    <span className="text-xs text-muted-foreground">
                      2016-2020
                    </span>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start">
                  <div className="flex flex-col items-start">
                    <span>Ford F-150</span>
                    <span className="text-xs text-muted-foreground">
                      2015-2019
                    </span>
                  </div>
                </Button>
              </div>
            </div>

            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2">Select Scenario</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto py-3">
                  <div className="flex flex-col items-start text-left">
                    <span>Check Engine Light</span>
                    <span className="text-xs text-muted-foreground">
                      Diagnose and troubleshoot a check engine light
                    </span>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-3">
                  <div className="flex flex-col items-start text-left">
                    <span>Emissions Test</span>
                    <span className="text-xs text-muted-foreground">
                      Prepare a vehicle for emissions testing
                    </span>
                  </div>
                </Button>
              </div>
            </div>

            <Button className="w-full">Launch Simulator</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const PartsContent = () => {
  const parts = [
    {
      id: 1,
      name: "Oxygen Sensor",
      price: 49.99,
      compatibility: ["Toyota", "Honda", "Ford"],
      image:
        "https://images.unsplash.com/photo-1635773054078-06ce7d2b3f8a?w=800&q=80",
    },
    {
      id: 2,
      name: "Mass Air Flow Sensor",
      price: 89.99,
      compatibility: ["Chevrolet", "GMC", "Cadillac"],
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    },
    {
      id: 3,
      name: "Catalytic Converter",
      price: 249.99,
      compatibility: ["Honda", "Acura", "Nissan"],
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.map((part) => (
          <Card key={part.id} className="overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{part.name}</CardTitle>
              <CardDescription>${part.price.toFixed(2)}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm mb-4">
                <span className="text-muted-foreground">Compatible with: </span>
                <span>{part.compatibility.join(", ")}</span>
              </div>
              <div className="flex justify-between">
                <Button variant="outline">Check Compatibility</Button>
                <Button>Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const EbooksContent = () => {
  const ebooks = [
    {
      id: 1,
      title: "Complete Guide to OBD2 Diagnostics",
      author: "John Smith",
      price: 24.99,
      pages: 320,
      cover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
    },
    {
      id: 2,
      title: "Advanced Engine Performance",
      author: "Maria Rodriguez",
      price: 29.99,
      pages: 280,
      cover:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&q=80",
    },
    {
      id: 3,
      title: "Automotive Electronics Explained",
      author: "David Chen",
      price: 19.99,
      pages: 240,
      cover:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ebooks.map((ebook) => (
        <Card key={ebook.id} className="overflow-hidden">
          <div className="h-56 overflow-hidden flex items-center justify-center bg-muted">
            <img
              src={ebook.cover}
              alt={ebook.title}
              className="h-full object-cover"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle>{ebook.title}</CardTitle>
            <CardDescription>
              by {ebook.author} • {ebook.pages} pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold mb-4">
              ${ebook.price.toFixed(2)}
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Preview</Button>
              <Button>Purchase</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContentSection;
