
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Faculty Meeting',
    date: 'May 8, 2025',
    time: '9:00 AM',
  },
  {
    id: 2,
    title: 'Final Exam - Math 101',
    date: 'May 10, 2025',
    time: '2:00 PM',
  },
  {
    id: 3,
    title: 'End of Semester',
    date: 'May 15, 2025',
    time: 'All Day',
  },
  {
    id: 4,
    title: 'Graduation Ceremony',
    date: 'May 20, 2025',
    time: '11:00 AM',
  }
];

const UpcomingEvents = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {events.map(event => (
            <div 
              key={event.id}
              className="flex items-center gap-4 px-6 py-3 border-b last:border-0 hover:bg-muted/50 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Calendar size={18} />
              </div>
              <div>
                <p className="font-medium text-sm">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.date} • {event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
