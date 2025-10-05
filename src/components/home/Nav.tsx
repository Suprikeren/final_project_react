import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cek token dari cookies saat pertama render
  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Navbar
      fluid
      rounded
      className="py-5 transition-all duration-500 xl:px-28 lg:px-14 px-10 bg-white border-b border-gray-200"
    >
      {/* Logo */}
      <NavbarBrand as={Link} to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900">
          Ini Logo
        </span>
      </NavbarBrand>

      {/* Toggle for mobile */}
      <NavbarToggle />

      {/* Collapsible Menu */}
      <NavbarCollapse className="lg:justify-between w-full">
        {/* Nav Links */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
          <NavbarLink as={Link} to="/" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} to="/jobs">
            JobsVacancy
          </NavbarLink>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4 mt-4 lg:mt-0">
          {isLoggedIn ? (
            <Link
              to="/dashboard"
              className="self-center text-gray-900 font-semibold hover:text-indigo-600 transition"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link to="/signin">
                <button className="w-20 h-11 text-white text-sm font-semibold bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 rounded-full">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="w-24 h-11 text-white text-sm font-semibold bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-full">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
