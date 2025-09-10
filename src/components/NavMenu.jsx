import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import Logo from "../assets/carnival-logo-next.png";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="px-0 py-0 w-[100%] bg-white">
      <div className="flex justify-between items-center font-normal w-full py-2 px-5 text-black relative">
        {/* Logo */}
        <div
          className="logo"
        >
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="md:w-[250px] w-[200px]" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-start gap-8 text-[20px] hover:cursor-pointer">
          <Link
            to={"/"}
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>

          {/* Curriculum */}
          <Link
            to={"/curriculum"}
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            curriculum
          </Link>

          <Link
            to={"/gallery"}
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            Gallery
          </Link>

          {/* Blog */}
          <Link
            to={"/blog"}
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            Blog
          </Link>

          <Link
            to={"/contact"}
            className="relative cursor-pointer 
               after:absolute after:left-0 after:-bottom-1 
               after:h-[2px] after:w-0 after:bg-red-600
               after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </ul>

        {/* Hamburger (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-[60px] left-0 w-full mx-5 bg-white/70 text-black font-bold rounded-[2px] shadow-md md:hidden z-50">
            <ul className="flex flex-col gap-4 md:p-5 p-2 text-lg">
              <Link to={"/"} className="hover:underline">
                Home
              </Link>
              <Link to={"/about"} className="hover:underline">
                About
              </Link>
              <Link to={"/curriculum"}>Curriculum</Link>

              <Link to={"/blog"} className="hover:underline">
                Blog
              </Link>
              <Link to={"/gallery"} className="hover:underline">
                Gallery
              </Link>
              <Link to={"/contact"} className="hover:underline">
                Contact Us
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
