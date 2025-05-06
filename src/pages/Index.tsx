
import React from 'react';
import { Users, BookOpen, Calendar, GraduationCap } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import StatCard from '@/components/dashboard/StatCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import EnrollmentChart from '@/components/dashboard/EnrollmentChart';
import UpcomingEvents from '@/components/dashboard/UpcomingEvents';

const Index = () => {
  return (
    <AppLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Total Students" 
          value="2,845" 
          icon={<Users size={24} />}
          change={{ value: 12, positive: true }}
        />
        <StatCard 
          title="Active Courses" 
          value="186" 
          icon={<BookOpen size={24} />}
          change={{ value: 5, positive: true }}
        />
        <StatCard 
          title="Attendance Rate" 
          value="94%" 
          icon={<Calendar size={24} />}
          change={{ value: 2, positive: true }}
        />
        <StatCard 
          title="Avg. GPA" 
          value="3.67" 
          icon={<GraduationCap size={24} />}
          change={{ value: 0.2, positive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <EnrollmentChart />
        </div>
        <div>
          <UpcomingEvents />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <RecentActivity />
      </div>
    </AppLayout>
  );
};

export default Index;
