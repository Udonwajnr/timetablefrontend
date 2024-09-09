"use client";
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Bars } from 'react-loader-spinner'; // Import the spinner
import Navigation from './components/Navigation';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(()=>{
    const userId = localStorage.getItem("userId")
    if(userId){
      router.push("/dashboard/courses")
    }
},[])

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({ ...prevData, role: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await axios.post('https://timetable-u9eo.onrender.com/api/register', formData);
      // Handle successful response here
      alert('Registration successful!');
      router.push("/login");
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
    <Navigation/>
      <section className="h-screen flex justify-center items-center">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Create an Account</CardTitle>
            <CardDescription>Enter your details to get started.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'border-red-500' : ''}
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select value={formData.role} onValueChange={handleSelectChange}>
                  <SelectTrigger className="text-muted-foreground">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="lecturer">Lecturer</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && <p className="text-red-500">{errors.role}</p>}
              </div>
              {errors.general && <p className="text-red-500">{errors.general}</p>}
              <CardFooter>
                <Button className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Bars color="#3498db" height={24} width={24} /> : 'Sign Up'}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
