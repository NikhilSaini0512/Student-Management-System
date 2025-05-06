
import React, { useState } from 'react';
import { 
  Table, 
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Search, MoreVertical } from 'lucide-react';

// Mock student data
const STUDENTS = [
  { 
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    grade: '10th',
    gpa: '3.8',
    status: 'Active'
  },
  { 
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    grade: '11th',
    gpa: '4.0',
    status: 'Active'
  },
  { 
    id: '3',
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    grade: '9th',
    gpa: '3.5',
    status: 'Active'
  },
  { 
    id: '4',
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    grade: '12th',
    gpa: '3.9',
    status: 'Active'
  },
  { 
    id: '5',
    name: 'James Lee',
    email: 'james.l@example.com',
    grade: '10th',
    gpa: '3.7',
    status: 'Inactive'
  },
  { 
    id: '6',
    name: 'Olivia Davis',
    email: 'olivia.d@example.com',
    grade: '11th',
    gpa: '3.6',
    status: 'Active'
  },
  { 
    id: '7',
    name: 'Ethan Miller',
    email: 'ethan.m@example.com',
    grade: '9th',
    gpa: '3.4',
    status: 'Active'
  },
  { 
    id: '8',
    name: 'Ava Anderson',
    email: 'ava.a@example.com',
    grade: '12th',
    gpa: '3.9',
    status: 'Active'
  },
];

const StudentList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStudents = STUDENTS.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search students..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>Add Student</Button>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>GPA</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map(student => (
                <TableRow key={student.id} className="table-row-animate">
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.gpa}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Grades</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No students found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentList;
