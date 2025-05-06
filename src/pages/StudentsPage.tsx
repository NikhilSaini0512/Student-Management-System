
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import StudentList from '@/components/students/StudentList';

const StudentsPage = () => {
  return (
    <AppLayout title="Students">
      <StudentList />
    </AppLayout>
  );
};

export default StudentsPage;
