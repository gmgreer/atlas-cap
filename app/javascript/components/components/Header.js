import React from "react";
import atlas from "../assets/atlas.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <div className="bg-base flex justify-between flex-wrap items-center px-6 text-teal-100">
      {/* todo add header atlas then three nav links */}
      <div>
        <img src={atlas} alt="logo" width={50} height={50} />
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuVisible(!isMenuVisible)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block text-right flex-grow lg:flex lg:items-center lg:w-auto ${
          !isMenuVisible && "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <NavLink
            to="/routinesindex"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Routines
          </NavLink>
          {!logged_in && (
            <>
              <a
                href={sign_in_route}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Sign In
              </a>
              <a
                href={new_user_route}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Sign Up
              </a>
            </>
          )}
          {logged_in && (
            <a
              href={sign_out_route}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Sign Out
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
