import React from 'react';
import e15 from '@/data/e15.json';

// Define a type for days to help TypeScript understand the exact keys.
type DayOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

const Page = () => {
  const today = new Date();
  const daysOfWeek: DayOfWeek[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = daysOfWeek[today.getDay()] as DayOfWeek; // Cast to DayOfWeek

  // Get today's schedule
  const todaySchedule = e15[dayName] || []; // TypeScript now understands dayName is a valid key

  return (
    <div>
      <h1>Schedule for {dayName}</h1>
      <ul>
        {todaySchedule.map((event, id) => (
          <li key={id}>
            <strong>{event.time}</strong>: {event.subject} in {event.classroom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
