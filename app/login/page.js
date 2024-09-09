"use client"
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Bars } from 'react-loader-spinner'; // Import the spinner
import Navigation from '../components/Navigation';
export default function Login() {
  const router = useRouter();
  const [data,setData] = useState([])
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await axios.post('https://timetable-u9eo.onrender.com/api/login', formData);
      // Store success message in local storage
      localStorage.setItem('userId', response.data.user._id);
      console.log(response)
      setData(response)
      // Handle successful response here

      // router.push('/dashboard'); // Redirect to a dashboard or another page after login
    } catch (error) {
      // Store error message in local storage
      localStorage.setItem('loginMessage', 'Invalid email or password');
      // Handle errors
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || { general: 'Invalid email or password' });
      } else {
        setErrors({ general: 'Something went wrong' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(()=>{
    const userId = localStorage.getItem("userId")
    if(userId){
      router.push("/dashboard/courses")
    }
  },[])
  return (
    <>
      <Navigation/>
      <section className="h-screen flex justify-center items-center">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your email and password to login.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'border-red-500' : ''}
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              {errors.general && <p className="text-red-500">{errors.general}</p>}
              <CardFooter>
                <Button className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Bars color="#3498db" height={24} width={24} /> : 'Login'}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
