
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const activities = [
  {
    id: 1,
    type: 'Grade Update',
    description: 'Sarah Johnson updated grades for Math 101',
    time: '10 minutes ago'
  },
  {
    id: 2,
    type: 'New Student',
    description: 'Michael Brown was added to History 202',
    time: '25 minutes ago'
  },
  {
    id: 3,
    type: 'Attendance',
    description: 'James Wilson marked as absent in Physics 301',
    time: '1 hour ago'
  },
  {
    id: 4,
    type: 'Course Update',
    description: 'Biology 201 schedule changed to MWF 2-3pm',
    time: '2 hours ago'
  },
  {
    id: 5,
    type: 'Assignment',
    description: 'New assignment posted for Computer Science 205',
    time: '3 hours ago'
  }
];

const RecentActivity = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {activities.map((activity) => (
            <div 
              key={activity.id}
              className="py-3 px-6 border-b last:border-0 hover:bg-muted/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">{activity.type}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
