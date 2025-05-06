
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, BookOpen } from 'lucide-react';

const COURSES = [
  {
    id: '1',
    code: 'MATH101',
    name: 'Algebra Fundamentals',
    instructor: 'Dr. Robert Johnson',
    students: 34,
    schedule: 'MWF 9:00-10:30 AM'
  },
  {
    id: '2',
    code: 'ENG205',
    name: 'American Literature',
    instructor: 'Prof. Emily Williams',
    students: 28,
    schedule: 'TR 11:00-12:30 PM'
  },
  {
    id: '3',
    code: 'SCI301',
    name: 'Biology & Life Sciences',
    instructor: 'Dr. Michael Chen',
    students: 32,
    schedule: 'MWF 1:00-2:30 PM'
  },
  {
    id: '4',
    code: 'HIS102',
    name: 'World History',
    instructor: 'Prof. Sarah Adams',
    students: 40,
    schedule: 'TR 2:00-3:30 PM'
  },
  {
    id: '5',
    code: 'CS205',
    name: 'Introduction to Programming',
    instructor: 'Dr. James Wilson',
    students: 25,
    schedule: 'MWF 3:00-4:30 PM'
  },
  {
    id: '6',
    code: 'PHYS201',
    name: 'Physics I',
    instructor: 'Prof. David Thompson',
    students: 30,
    schedule: 'TR 9:00-10:30 AM'
  }
];

const CoursesPage = () => {
  return (
    <AppLayout title="Courses">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-8"
            />
          </div>
          <Button>Add Course</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COURSES.map(course => (
            <Card key={course.id} className="overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <BookOpen size={18} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{course.code}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{course.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">Instructor: {course.instructor}</p>
                <div className="flex justify-between text-sm">
                  <span>{course.students} Students</span>
                  <span>{course.schedule}</span>
                </div>
                <div className="mt-4 pt-4 border-t flex justify-end">
                  <Button variant="ghost" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default CoursesPage;
