import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewRoutine = ({
  routines,
  exercises,
  exerciseRoutines,
  completedRoutines,
  createRoutine,
  current_user,
}) => {
  const navigate = useNavigate();
  const [newRoutine, setNewRoutine] = useState({
    name: "",
    days_per_week: 0,
    user_id: current_user?.id,
  });

  const handleChange = (e) => {
    setNewRoutine({ ...newRoutine, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createRoutine(newRoutine);
    navigate("/routinesindex");
  };
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#7DAFC7] to-[#FFFFFF] min-h-screen">
      <h1 className="text-3xl text-white mt-5">Create Routine</h1>
      <div className="w-full max-w-xs">
        <form className="p-8">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Routine Name
            </label>
            <input
              onChange={handleChange}
              name="name"
              id="name"
              type="text"
              placeholder="Strength Training"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="days_per_week"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              How many days per week will you workout?
            </label>
            <input
              onChange={handleChange}
              name="days_per_week"
              min={1}
              max={7}
              id="days_per_week"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
          </div>

          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRoutine;
