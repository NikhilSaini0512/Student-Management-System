
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { 
  Table, 
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const GRADE_DATA = [
  { id: 1, student: 'John Smith', assignment: 'Midterm Exam', score: 88, maxScore: 100, grade: 'B+', submitted: '2025-04-15' },
  { id: 2, student: 'Sarah Johnson', assignment: 'Midterm Exam', score: 95, maxScore: 100, grade: 'A', submitted: '2025-04-15' },
  { id: 3, student: 'Michael Brown', assignment: 'Midterm Exam', score: 79, maxScore: 100, grade: 'C+', submitted: '2025-04-15' },
  { id: 4, student: 'Emma Wilson', assignment: 'Midterm Exam', score: 92, maxScore: 100, grade: 'A-', submitted: '2025-04-15' },
  { id: 5, student: 'James Lee', assignment: 'Midterm Exam', score: 85, maxScore: 100, grade: 'B', submitted: '2025-04-15' },
  { id: 6, student: 'Olivia Davis', assignment: 'Midterm Exam', score: 91, maxScore: 100, grade: 'A-', submitted: '2025-04-15' },
];

const GRADE_DISTRIBUTION = [
  { name: 'A', students: 12 },
  { name: 'B', students: 18 },
  { name: 'C', students: 8 },
  { name: 'D', students: 2 },
  { name: 'F', students: 0 },
];

const GradesPage = () => {
  return (
    <AppLayout title="Grades">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={GRADE_DISTRIBUTION}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Class Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Class Average</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Passing Rate</span>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Assignment Completion</span>
                  <span className="text-sm font-medium">88%</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Students at Risk</span>
                  <span className="text-sm font-medium">5%</span>
                </div>
                <Progress value={5} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Grade Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-1 block">Course</label>
              <Select defaultValue="math101">
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math101">Math 101</SelectItem>
                  <SelectItem value="eng205">English 205</SelectItem>
                  <SelectItem value="sci301">Science 301</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Assignment</label>
              <Select defaultValue="midterm">
                <SelectTrigger>
                  <SelectValue placeholder="Select assignment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="midterm">Midterm Exam</SelectItem>
                  <SelectItem value="hw1">Homework #1</SelectItem>
                  <SelectItem value="project">Final Project</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Submitted</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {GRADE_DATA.map(record => (
                  <TableRow key={record.id} className="table-row-animate">
                    <TableCell className="font-medium">{record.student}</TableCell>
                    <TableCell>{record.assignment}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>{record.score}/{record.maxScore}</span>
                        <Progress 
                          value={(record.score / record.maxScore) * 100} 
                          className="h-2 w-20" 
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        record.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                        record.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                        record.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                        record.grade.startsWith('D') ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {record.grade}
                      </span>
                    </TableCell>
                    <TableCell>{record.submitted}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </AppLayout>
  );
};

export default GradesPage;
