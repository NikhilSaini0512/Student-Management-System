
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', students: 400 },
  { name: 'Feb', students: 430 },
  { name: 'Mar', students: 440 },
  { name: 'Apr', students: 455 },
  { name: 'May', students: 470 },
  { name: 'Jun', students: 485 },
  { name: 'Jul', students: 490 },
  { name: 'Aug', students: 510 },
  { name: 'Sep', students: 535 },
  { name: 'Oct', students: 550 },
  { name: 'Nov', students: 560 },
  { name: 'Dec', students: 575 }
];

const EnrollmentChart = () => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Student Enrollment Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="students"
                stroke="hsl(var(--primary))"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnrollmentChart;
