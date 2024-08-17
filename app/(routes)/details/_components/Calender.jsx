"use client";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

const Calender = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col mt-5 gap-3 w-fit">
      <h2 className="font-bold">Select Date</h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default Calender;
