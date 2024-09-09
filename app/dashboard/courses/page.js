"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import DashboardNavigation from '@/app/components/DashboardNavigation';
export default function CoursesPage() {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.push("login");
    }

    axios.get('https://timetable-u9eo.onrender.com/api/course')
      .then(response => {
        setCourses(response.data);
        setFilteredCourses(response.data);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, [router]);

  useEffect(() => {
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
    router.push('/create-course');
  };

  return (
    <>
      <DashboardNavigation/>
      <section className="h-screen flex flex-col p-4 space-y-4">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Courses</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div key={course._id} className="bg-background rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
                    <div className="flex items-center mb-4 text-muted-foreground">
                      <BookIcon className="w-5 h-5 mr-2" />
                      <span>{course.code}</span>
                    </div>
                    <div className="flex items-center mb-4 text-muted-foreground">
                      <GraduationCapIcon className="w-5 h-5 mr-2" />
                      <span>{course.credit} Credits</span>
                    </div>
                    <div className="flex items-center mb-4 text-muted-foreground">
                      <UserIcon className="w-5 h-5 mr-2" />
                      <span>{course.lecturer?.name || 'N/A'}</span>
                    </div>
                    <div className="flex items-center mb-4 text-muted-foreground">
                      <BuildingIcon className="w-5 h-5 mr-2" />
                      <span>{course.department}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-lg font-semibold">No courses found</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function GraduationCapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
