
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
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const ATTENDANCE_DATA = [
  {
    id: '1',
    name: 'John Smith',
    status: 'present',
    date: '2025-05-06',
    course: 'Math 101',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    status: 'present',
    date: '2025-05-06',
    course: 'Math 101',
  },
  {
    id: '3',
    name: 'Michael Brown',
    status: 'absent',
    date: '2025-05-06',
    course: 'Math 101',
  },
  {
    id: '4',
    name: 'Emma Wilson',
    status: 'present',
    date: '2025-05-06',
    course: 'Math 101',
  },
  {
    id: '5',
    name: 'James Lee',
    status: 'late',
    date: '2025-05-06',
    course: 'Math 101',
  },
  {
    id: '6',
    name: 'Olivia Davis',
    status: 'present',
    date: '2025-05-06',
    course: 'Math 101',
  },
];

const AttendancePage = () => {
  return (
    <AppLayout title="Attendance">
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Attendance Records</CardTitle>
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
                  <SelectItem value="his102">History 102</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Date</label>
              <Select defaultValue="today">
                <SelectTrigger>
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today (May 6, 2025)</SelectItem>
                  <SelectItem value="yesterday">Yesterday (May 5, 2025)</SelectItem>
                  <SelectItem value="may4">May 4, 2025</SelectItem>
                  <SelectItem value="may3">May 3, 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ATTENDANCE_DATA.map(record => (
                  <TableRow key={record.id} className="table-row-animate">
                    <TableCell className="font-medium">{record.name}</TableCell>
                    <TableCell>{record.course}</TableCell>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {record.status === 'present' && (
                          <><CheckCircle size={16} className="text-green-600 mr-2" /> Present</>
                        )}
                        {record.status === 'absent' && (
                          <><XCircle size={16} className="text-red-600 mr-2" /> Absent</>
                        )}
                        {record.status === 'late' && (
                          <><AlertCircle size={16} className="text-amber-600 mr-2" /> Late</>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {record.status === 'absent' && 'Excused absence - doctor appointment'}
                      {record.status === 'late' && 'Arrived 15 min late'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Present</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">83%</p>
            <p className="text-sm text-muted-foreground mt-1">30 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Absent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">11%</p>
            <p className="text-sm text-muted-foreground mt-1">4 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Late</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-600">6%</p>
            <p className="text-sm text-muted-foreground mt-1">2 students</p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AttendancePage;
