"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { useRouter } from 'next/navigation';

export default function CoursesPage() {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the API
    axios.get('https://timetable-u9eo.onrender.com/api/course')
      .then(response => {
        setCourses(response.data);
        setFilteredCourses(response.data);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  useEffect(() => {
    // Filter courses based on the search term
    setFilteredCourses(
      courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, courses]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCreateCourse = () => {
    router.push('/create-course'); // Redirect to the course creation page
  };

  return (
    <section className="h-screen flex flex-col p-4 space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Courses</CardTitle>
          <CardContent>
            <div className="flex items-center mb-4 space-x-4">
              <Input
                type="text"
                placeholder="Search courses"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full max-w-md"
              />
              <Button onClick={handleCreateCourse}>Create Course</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Course Name</TableCell>
                  <TableCell>Course Code</TableCell>
                  <TableCell>Credit</TableCell>
                  <TableCell>Lecturer</TableCell>
                  <TableCell>Department</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map(course => (
                    <TableRow key={course._id}>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.code}</TableCell>
                      <TableCell>{course.credit}</TableCell>
                      <TableCell>{course.lecturerName || 'N/A'}</TableCell> {/* Assuming lecturerName is available */}
                      <TableCell>{course.department}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">No courses found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
        <CardFooter>
          {/* Any footer actions can go here */}
        </CardFooter>
      </Card>
    </section>
  );
}
