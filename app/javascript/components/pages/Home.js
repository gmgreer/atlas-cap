import React from "react";
import atlas from "../assets/atlas.png";
import { NavLink } from "react-router-dom";

const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
  routines,
  exercises,
  exerciseRoutines,
  completedRoutines,
}) => {
  console.log("current user", current_user);
  console.log("logged in", logged_in);
  console.log("new user route", new_user_route);
  console.log("sign_in_route", sign_in_route);
  console.log("routines", routines);
  console.log("exercises", exercises);
  console.log("exercise routines", exerciseRoutines);
  console.log("completed routines", completedRoutines);
  return (
    <div className="h-screen bg-base flex flex-col items-center">
      <img src={atlas} alt="logo" height={300} width={300} />
      <a href={sign_in_route}>
        <button className="bg-[#5DDD80] rounded-lg text-6xl italic font-extrabold w-[320px] h-[105px]">
          BEGIN
        </button>
      </a>
    </div>
  );
};

export default Home;
