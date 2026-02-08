import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Clock, 
  MapPin, 
  User,
  Camera
} from "lucide-react";

interface Event {
  id: number;
  title: string;
  client: string;
  type: "wedding" | "portrait" | "event" | "commercial";
  date: Date;
  time: string;
  location: string;
  status: "confirmed" | "pending" | "completed";
}

const eventTypeColors = {
  wedding: "bg-primary/20 text-primary border-primary/30",
  portrait: "bg-accent/20 text-accent-foreground border-accent/30",
  event: "bg-blue-100 text-blue-700 border-blue-200",
  commercial: "bg-green-100 text-green-700 border-green-200",
};

const statusColors = {
  confirmed: "bg-green-100 text-green-700",
  pending: "bg-amber-100 text-amber-700",
  completed: "bg-muted text-muted-foreground",
};

// Sample events data
const sampleEvents: Event[] = [
  {
    id: 1,
    title: "Johnson Wedding",
    client: "Emily & David Johnson",
    type: "wedding",
    date: new Date(2026, 1, 7),
    time: "2:00 PM - 10:00 PM",
    location: "Rosewood Estate, Napa Valley",
    status: "confirmed",
  },
  {
    id: 2,
    title: "Corporate Headshots",
    client: "TechStart Inc.",
    type: "commercial",
    date: new Date(2026, 1, 12),
    time: "9:00 AM - 1:00 PM",
    location: "Client Office, San Francisco",
    status: "confirmed",
  },
  {
    id: 3,
    title: "Family Portrait Session",
    client: "Martinez Family",
    type: "portrait",
    date: new Date(2026, 1, 15),
    time: "4:00 PM - 6:00 PM",
    location: "Golden Gate Park",
    status: "pending",
  },
  {
    id: 4,
    title: "Anniversary Celebration",
    client: "The Andersons",
    type: "event",
    date: new Date(2026, 1, 20),
    time: "6:00 PM - 11:00 PM",
    location: "Ritz Carlton, SF",
    status: "confirmed",
  },
  {
    id: 5,
    title: "Newborn Session",
    client: "Sarah Chen",
    type: "portrait",
    date: new Date(2026, 1, 22),
    time: "10:00 AM - 12:00 PM",
    location: "Home Studio",
    status: "pending",
  },
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // February 2026

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDay = (day: number) => {
    return sampleEvents.filter(event => 
      event.date.getDate() === day && 
      event.date.getMonth() === currentDate.getMonth() && 
      event.date.getFullYear() === currentDate.getFullYear()
    );
  };

  const upcomingEvents = sampleEvents
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5);

  // Generate calendar days
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                Events Calendar
              </h1>
              <p className="text-muted-foreground">
                Manage your photo shoots, sessions, and events
              </p>
            </div>
            
            <Button variant="hero" className="gap-2">
              <Plus className="w-4 h-4" />
              New Event
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar Grid */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <Button variant="ghost" size="icon" onClick={() => navigateMonth("prev")}>
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <h2 className="text-xl font-serif font-semibold">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <Button variant="ghost" size="icon" onClick={() => navigateMonth("next")}>
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Day Names */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map(day => (
                      <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, index) => {
                      const dayEvents = day ? getEventsForDay(day) : [];
                      const isToday = day === new Date().getDate() && 
                        currentDate.getMonth() === new Date().getMonth() && 
                        currentDate.getFullYear() === new Date().getFullYear();

                      return (
                        <div 
                          key={index}
                          className={`min-h-[100px] p-2 rounded-lg border transition-colors ${
                            day 
                              ? "border-border hover:border-primary/30 cursor-pointer" 
                              : "border-transparent"
                          } ${isToday ? "bg-primary/5 border-primary/30" : ""}`}
                        >
                          {day && (
                            <>
                              <span className={`text-sm font-medium ${
                                isToday ? "text-primary" : "text-foreground"
                              }`}>
                                {day}
                              </span>
                              <div className="mt-1 space-y-1">
                                {dayEvents.slice(0, 2).map(event => (
                                  <div 
                                    key={event.id}
                                    className={`text-xs px-2 py-1 rounded-md border truncate ${eventTypeColors[event.type]}`}
                                  >
                                    {event.title}
                                  </div>
                                ))}
                                {dayEvents.length > 2 && (
                                  <div className="text-xs text-muted-foreground px-2">
                                    +{dayEvents.length - 2} more
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${eventTypeColors.wedding.split(" ")[0]}`} />
                  <span className="text-muted-foreground">Weddings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent/30" />
                  <span className="text-muted-foreground">Portraits</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-200" />
                  <span className="text-muted-foreground">Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-200" />
                  <span className="text-muted-foreground">Commercial</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events Sidebar */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Upcoming Sessions
              </h3>
              
              {upcomingEvents.map(event => (
                <Card key={event.id} className="border-0 shadow-card hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Camera className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground truncate">
                            {event.title}
                          </h4>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[event.status]}`}>
                            {event.status}
                          </span>
                        </div>
                        
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-3.5 h-3.5" />
                            <span className="truncate">{event.client}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>
                              {event.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })} • {event.time.split(" - ")[0]}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5" />
                            <span className="truncate">{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calendar;
