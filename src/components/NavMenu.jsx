import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import Logo from "../assets/logo.png";
import { ChevronDown } from "lucide-react";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="px-5 py-3 absolute top-0 w-[100%]">
      <div className="flex items-center justify-between font-normal w-full py-2 bg-white/70 rounded-[50px] px-5 text-black relative">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" className="w-[80px]" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-start gap-8 text-[18px] hover:cursor-pointer">
          <li
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </li>
          <li
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </li>
          {/* Curriculum */}
          <li className="relative">
            <button
              onClick={() => toggleMenu("curriculum")}
              className="relative cursor-pointer flex items-center gap-1 
            after:absolute after:left-0 after:-bottom-1 
            after:h-[2px] after:w-0 after:bg-red-600
            after:transition-all after:duration-300 hover:after:w-full"
            >
              Curriculum
              <span
                className={`transition-transform ${
                  activeMenu === "curriculum" ? "rotate-180" : ""
                }`}
              >
                <ChevronDown size={16} />
              </span>
            </button>

            {activeMenu === "curriculum" && (
              <ul className="absolute left-0 top-full mt-7 bg-white/70 text-black rounded-md shadow-lg w-48 z-50 text-[18px]">
                <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
                  Practical Life
                </li>
                <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
                  Sensorial
                </li>
                <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
                  Language
                </li>
                <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
                  Mathematics
                </li>
              </ul>
            )}
          </li>

          {/* Services */}
          <li className="relative">
            <button
              onClick={() => toggleMenu("services")}
              className="relative cursor-pointer flex items-center gap-1 
            after:absolute after:left-0 after:-bottom-1 
            after:h-[2px] after:w-0 after:bg-red-600
            after:transition-all after:duration-300 hover:after:w-full"
            >
              Services
              <span
                className={`transition-transform ${
                  activeMenu === "services" ? "rotate-180" : ""
                }`}
              >
                <ChevronDown size={16} />
              </span>
            </button>

            {activeMenu === "services" && (
              <ul className="absolute left-0 top-full mt-7 bg-white/70  text-black rounded-md shadow-lg w-48 z-50 text-[18px]">
                <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
                 Training
                </li>
                <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
                  Franchisee
                </li>
                <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
                  Environment
                </li>
               
              </ul>
            )}
          </li>

          <li
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            Gallery
          </li>
          <li
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </li>
        </ul>

        {/* Hamburger (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-[80px] left-0 w-full bg-white/70 text-white rounded-[20px] shadow-md md:hidden">
            <ul className="flex flex-col gap-4 p-5 text-lg">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">About</li>
              <li className="relative group">
                <span className="hover:underline cursor-pointer">
                  Curriculum
                </span>

                {/* Dropdown Menu */}
                <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-black rounded-md shadow-lg w-40">
                  <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                    Class 1
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                    Class 2
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                    Class 3
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-100 cursor-pointer">
                    Class 4
                  </li>
                </ul>
              </li>

              <li className="hover:underline">Services</li>
              <li className="hover:underline">Gallery</li>
              <li className="hover:underline">Contact Us</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
