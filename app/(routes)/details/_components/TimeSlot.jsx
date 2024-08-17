import React, { useState } from "react";

const TimeSlot = ({ timeslot, setTimeslot }) => {
  console.log("Timeslot", timeslot);
  const times = [
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00AM",
    "12:30PM",
    "1:00PM",
    "1:30PM",
    "2:00PM",
    "2:30PM",
    "3:00PM",
    "3:30PM",
    "4:00PM",
    "4:30PM",
    "5:00PM",
    "6:00PM",
    "7:00PM",
    "7:30PM",
  ];
  return (
    <>
      <div className="flex flex-col gap-4 mt-5">
        <h2 className="font-bold">Select Time Slot</h2>
        <div className="grid grid-cols-3 gap-5 border rounded-lg w-fit p-4 pl-2 cursor-pointer">
          {times?.map((curr, index) => {
            return (
              <h2
                onClick={() => setTimeslot(curr)}
                className={`py-2 px-4 w-fit border rounded-full ${
                  timeslot == curr ? "bg-primary text-white text-center" : ""
                } `}
              >
                {curr}
              </h2>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeSlot;
