import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import SignOut from "../Auth/SignOut";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const navbarRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        !iconRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        ref={iconRef}
        className={`h-14 w-14 absolute top-10 left-5 z-50 cursor-pointer rounded-full bg-[#FFB100] opacity-60 transform ${
          isOpen && "scale-120"
        } shadow-md transition-all ease-in-out duration-200`}
        id="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`absolute left-1/4 top-full w-8 h-0.5 bg-black transition-all duration-400 ease-in-out transform ${
            isOpen && "rotate-45"
          } translate-y-[-2rem]`}
        />
        <div
          className={`absolute left-1/4 top-1/2 w-8 h-0.5 bg-black transition-all duration-400 ease-in-out ${
            isOpen && "opacity-0"
          }`}
        />
        <div
          className={`absolute left-1/4  w-8 h-0.5 bg-black transition-all duration-400 ease-in-out transform ${
            isOpen && "-rotate-45"
          } translate-y-[2rem]`}
        />
      </div>

      <nav
        ref={navbarRef}
        className={`absolute top-0 left-0 h-full w-0 z-10 opacity-0 transition-all duration-600 delay-100 ease-in-out transform ${
          isOpen && "w-1/4 opacity-100"
        }`}
      >
        <ul className="absolute top-1/3 left-1/4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(!isOpen)}
            className="list-none text-2xl text-white leading-10 uppercase tracking-wide"
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            onClick={() => setIsOpen(!isOpen)}
            className="list-none text-2xl text-white leading-10 uppercase tracking-wide"
          >
            <li>Recipes</li>
          </NavLink>
          <NavLink
            to="/recipes"
            onClick={() => setIsOpen(!isOpen)}
            className="list-none text-2xl text-white leading-10 uppercase tracking-wide"
          >
            <li>Categories</li>
          </NavLink>
          <NavLink
            to="/recipes"
            onClick={() => setIsOpen(!isOpen)}
            className="list-none text-2xl text-white leading-10 uppercase tracking-wide"
          >
            <li>Ingredients</li>
          </NavLink>
        </ul>
        <div className="absolute top-[80vh] left-[6vw] flex gap-5">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/signin")}
                className="bg-[#F0ECCF] text-black px-4 py-2 rounded"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-[#F0ECCF] text-black px-4 py-2 rounded"
              >
                Sign Up
              </button>
            </>
          ) : (
            <SignOut />
          )}
        </div>
      </nav>
      <div
        className={`absolute  top-0 transition-all duration-1000 delay-50 ease-in-out ${
          isOpen && "h-[100vh] w-full bg-black opacity-50"
        } `}
      ></div>

      <div
        className={`absolute top-0 left-0 h-full w-0 z-5 opacity-0 transition-all duration-500 delay-50 ease-in-out ${
          isOpen && "w-1/4 opacity-100"
        } bg-[#A3BB98]`}
        id="blue"
      />
    </>
  );
}

export default Navbar;
