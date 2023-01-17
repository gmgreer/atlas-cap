import React from "react";
import { NavLink } from "react-router-dom";

const Routines = ({
  routines,
  exercises,
  exerciseRoutines,
  completedRoutines,
  logged_in,
}) => {
  console.log(logged_in);
  return (
    <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-[#7DAFC7] to-[#92692C] min-h-screen py-10 ">
      {logged_in && (
        <NavLink
          to="/routinenew"
          className="text-white border rounded-2xl border-white bg-[#D9D9D9] bg-opacity-40 p-3"
        >
          Create New Routine
        </NavLink>
      )}
      {routines?.map((routine, index) => (
        <div
          key={routine.id}
          className="rounded-2xl min-h-[125px] min-w-[400px] text-[#FFFFFF] py-10 flex flex-col justify-center items-center gap-2 bg-[#D9D9D9] bg-opacity-40"
        >
          <h3>{routine.name}</h3>
          <p>Days Per Week: {routine.days_per_week}</p>
          <a href={`routines/${routine.id}`}>
            <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Select
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Routines;
