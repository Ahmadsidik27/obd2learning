import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BookOpen,
  FileCode,
  Video,
  Settings,
  ShoppingCart,
  BookText,
  Menu,
  X,
  User,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection?: string;
}

const DashboardLayout = ({
  children,
  activeSection = "home",
}: DashboardLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    {
      name: "Dashboard",
      icon: <Home className="h-5 w-5" />,
      path: "/",
      id: "home",
    },
    {
      name: "Course Modules",
      icon: <BookOpen className="h-5 w-5" />,
      path: "/courses",
      id: "courses",
    },
    {
      name: "OBD2 Code Library",
      icon: <FileCode className="h-5 w-5" />,
      path: "/codes",
      id: "codes",
    },
    {
      name: "Video Tutorials",
      icon: <Video className="h-5 w-5" />,
      path: "/videos",
      id: "videos",
    },
    {
      name: "Scanner Simulator",
      icon: <Settings className="h-5 w-5" />,
      path: "/simulator",
      id: "simulator",
    },
    {
      name: "Spare Parts Store",
      icon: <ShoppingCart className="h-5 w-5" />,
      path: "/store",
      id: "store",
    },
    {
      name: "Technical Ebooks",
      icon: <BookText className="h-5 w-5" />,
      path: "/ebooks",
      id: "ebooks",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                      <Settings className="h-6 w-6" />
                      <span className="font-bold">OBD2 Learning</span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-1">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <Link to="/" className="flex items-center gap-2">
              <Settings className="h-6 w-6" />
              <span className="font-bold hidden md:inline-block">
                OBD2 Learning Platform
              </span>
              <span className="font-bold md:hidden">OBD2</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <Badge className="absolute top-1 right-1 h-2 w-2 bg-red-500 p-0" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar>
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user123"
                alt="User"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar (desktop only) */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-background p-4">
          <nav className="flex flex-col space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"}`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
