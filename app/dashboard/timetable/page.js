"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardNavigation from '@/app/components/DashboardNavigation';
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = [
  '8:00 AM - 9:00 AM',
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 1:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
];

const fetchCourses = async () => {
  try {
    const response = await axios.get('https://timetable-u9eo.onrender.com/api/course');
    return response.data; // Ensure this matches your API's response structure
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

const createEmptyTimetable = () => {
  return timeSlots.map((slot) => ({
    time: slot,
    days: daysOfWeek.map(() => ({ subject: '', lecturer: '', bgColor: '', textColor: '' })),
  }));
};

const assignCourseToTimetable = (timetable, course) => {
  let remainingCredits = course.credit;
  let availableSlots = [];
  
  // Collect all available slots
  timetable.forEach((row, timeIndex) => {
    row.days.forEach((day, dayIndex) => {
      if (day.subject === '') {
        availableSlots.push({ timeIndex, dayIndex });
      }
    });
  });

  // Shuffle available slots to randomize assignment
  availableSlots = availableSlots.sort(() => Math.random() - 0.5);

  // Assign course to available slots
  while (remainingCredits > 0 && availableSlots.length > 0) {
    const { timeIndex, dayIndex } = availableSlots.pop();
    if (remainingCredits > 0) {
      const bgColor = 'bg-primary'; // Customize as needed
      const textColor = 'text-primary-foreground'; // Customize as needed

      timetable[timeIndex].days[dayIndex] = {
        subject: `${course.name} (${course.code})`,
        lecturer: course.lecturer.name,
        bgColor,
        textColor,
      };

      remainingCredits--;
    }
  }

  return timetable;
};

export default function TimeTable() {
  const [timetableData, setTimetableData] = useState([]);

  useEffect(() => {
    const generateTimetable = async () => {
      const userId = localStorage.getItem("userId")
        if(!userId){
          router.push("login")
        }
   
      const courses = await fetchCourses();
      const timetable = createEmptyTimetable();


      // Add a few courses to make the timetable more realistic
      for (const course of courses) {
        assignCourseToTimetable(timetable, course);
      }

      setTimetableData(timetable);
    };

    generateTimetable();
  }, []);

  return (
    <>
      <DashboardNavigation/>
      <div className="p-6 sm:p-10 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">Weekly Timetable</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted text-center">
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Time</th>
                  {daysOfWeek.map((day) => (
                    <th key={day} className="px-6 py-4 text-left font-semibold text-muted-foreground">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetableData.map((row, index) => (
                  <tr key={index} className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 border-b text-center">{row.time}</td>
                    {row.days.map((day, i) => (
                      <td key={i} className="px-6 py-4 border-b text-center">
                        <div className={`rounded-lg px-4 py-2 font-medium ${day.bgColor} ${day.textColor}`}>
                          <div>{day.subject}</div>
                          <div className="text-sm">{day.lecturer}</div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
