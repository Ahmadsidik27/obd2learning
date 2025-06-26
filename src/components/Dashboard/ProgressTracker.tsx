import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, Wrench, BookText, CheckCircle } from "lucide-react";

interface ProgressTrackerProps {
  courseProgress?: number;
  videosWatched?: number;
  totalVideos?: number;
  simulatorSessions?: number;
  ebookProgress?: {
    purchased: number;
    completed: number;
    total: number;
  };
  recentAchievements?: {
    title: string;
    date: string;
    type: "course" | "video" | "simulator" | "ebook";
  }[];
}

const ProgressTracker = ({
  courseProgress = 35,
  videosWatched = 12,
  totalVideos = 24,
  simulatorSessions = 8,
  ebookProgress = {
    purchased: 3,
    completed: 1,
    total: 3,
  },
  recentAchievements = [
    { title: "OBD2 Basics", date: "2023-06-15", type: "course" },
    { title: "Engine Sensor Diagnostics", date: "2023-06-10", type: "video" },
    {
      title: "Transmission Codes Mastery",
      date: "2023-06-05",
      type: "simulator",
    },
  ],
}: ProgressTrackerProps) => {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Your Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Recent Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Course Progress */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  <h3 className="font-medium">Course Completion</h3>
                </div>
                <Progress value={courseProgress} className="h-2 mb-2" />
                <p className="text-sm text-gray-600">
                  {courseProgress}% complete
                </p>
              </div>

              {/* Videos Watched */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                  <Video className="h-5 w-5 mr-2 text-red-600" />
                  <h3 className="font-medium">Videos Watched</h3>
                </div>
                <Progress
                  value={(videosWatched / totalVideos) * 100}
                  className="h-2 mb-2"
                />
                <p className="text-sm text-gray-600">
                  {videosWatched} of {totalVideos} videos
                </p>
              </div>

              {/* Simulator Sessions */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                  <Wrench className="h-5 w-5 mr-2 text-green-600" />
                  <h3 className="font-medium">Simulator Practice</h3>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {simulatorSessions}
                </div>
                <p className="text-sm text-gray-600">practice sessions</p>
              </div>

              {/* Ebooks */}
              <div className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                  <BookText className="h-5 w-5 mr-2 text-purple-600" />
                  <h3 className="font-medium">Ebooks</h3>
                </div>
                <Progress
                  value={
                    (ebookProgress.completed / ebookProgress.purchased) * 100
                  }
                  className="h-2 mb-2"
                />
                <p className="text-sm text-gray-600">
                  {ebookProgress.completed} of {ebookProgress.purchased}{" "}
                  completed
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-3">
              {recentAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 border rounded-lg"
                >
                  <div className="mr-3">
                    {achievement.type === "course" && (
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    )}
                    {achievement.type === "video" && (
                      <Video className="h-5 w-5 text-red-600" />
                    )}
                    {achievement.type === "simulator" && (
                      <Wrench className="h-5 w-5 text-green-600" />
                    )}
                    {achievement.type === "ebook" && (
                      <BookText className="h-5 w-5 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">
                      Completed on{" "}
                      {new Date(achievement.date).toLocaleDateString()}
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
