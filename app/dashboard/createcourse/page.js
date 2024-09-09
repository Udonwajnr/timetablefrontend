"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Bars } from 'react-loader-spinner'; // Import the spinner
import DashboardNavigation from '@/app/components/DashboardNavigation';
export default function CreateCourse() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    credit: '',
    lecturer: '', // Lecturer ID will be set from local storage
    department: 'Computer Science', // Default value
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lecturerId, setLecturerId] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem("userId")
    if(!userId){
      router.push("login")
    }
   
    // Fetch the lecturer ID from local storage
    const id = localStorage.getItem('userId'); // Assuming 'userId' is the key in local storage
    if (id) {
      setLecturerId(id);
      setFormData(prevData => ({ ...prevData, lecturer: id }));
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prevData => ({ ...prevData, department: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await axios.post('https://timetable-u9eo.onrender.com/api/course', formData);
      // Handle successful response here
      alert('Course created successfully!');
      router.push('/dashboard/courses'); // Redirect to courses or another page after creation
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || { general: 'Something went wrong' });
      } else {
        setErrors({ general: 'Something went wrong' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <DashboardNavigation/>
      <section className="h-screen flex justify-center items-center">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Create a New Course</CardTitle>
            <CardDescription>Fill in the details to create a new course.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Course Name</Label>
                <Input
                  id="name"
                  placeholder="Enter course name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="code">Course Code</Label>
                <Input
                  id="code"
                  placeholder="Enter course code"
                  value={formData.code}
                  onChange={handleChange}
                  className={errors.code ? 'border-red-500' : ''}
                />
                {errors.code && <p className="text-red-500">{errors.code}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="credit">Credit</Label>
                <Input
                  id="credit"
                  type="number"
                  placeholder="Enter course credit"
                  value={formData.credit}
                  onChange={handleChange}
                  className={errors.credit ? 'border-red-500' : ''}
                />
                {errors.credit && <p className="text-red-500">{errors.credit}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lecturer">Lecturer</Label>
                <Input
                  id="lecturer"
                  value={lecturerId || formData.lecturer}
                  disabled
                  className="bg-gray-100"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Select value={formData.department} onValueChange={handleSelectChange}>
                  <SelectTrigger className="text-muted-foreground">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Physics">Physics</SelectItem>
                  </SelectContent>
                </Select>
                {errors.department && <p className="text-red-500">{errors.department}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Enter course description"
                  value={formData.description}
                  onChange={handleChange}
                  className={errors.description ? 'border-red-500' : ''}
                />
                {errors.description && <p className="text-red-500">{errors.description}</p>}
              </div>
              {errors.general && <p className="text-red-500">{errors.general}</p>}
              <CardFooter>
                <Button className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Bars color="#3498db" height={24} width={24} /> : 'Create Course'}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </section>
    
    </>
  );
}
