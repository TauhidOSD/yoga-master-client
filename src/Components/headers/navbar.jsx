import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Instructor", route: "/instructors" },
  { name: "Classes", route: "/classes" },
];
const navbar = () => {
  const [navBg, setNavBg]= useState('bg-[#15151580]')
  return (
    <nav>
      <div className="lg: w-[95%] mx-auto sm:px-6 lg: px-6">
        <div className="px-4 py-4 flex items-center justify-center">
          {/* {logo} */}
          <div>
            <h1 className="text-2xl inline-flex gap-3 items-center font-bold">
              YogaMaster <img src="/yoga-logo.png" alt="" className="w-8 h-8" />
            </h1>
            <p className="font-bold text-[13px] tracking-[8px]">
              Quick Explore
            </p>
          </div>

          {/* mobile menu icons */}

          {/* Navigation Links */}
          <div className="hidden md:block dark:text-white">
            <div className="flex">
              <ul className="ml-10 flex items-center space-x-4 pr-4">
                {navLinks.map((Link) => (
                  <li key={Link.route}>
                    <NavLink
                      to={Link.route}
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 
                          'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`
                      }
                    >
                      {Link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
