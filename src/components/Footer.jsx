import React from "react";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#48a8df] md:px-10 px-5 md:py-20 py-20">
        <div className="footer-top md:flex">
          <div className="ftop-1 md:w-[75%] w-full">
            <h6 className="text-white md:text-3xl text-2xl font-[cursive]">
              Where curiosity meets creativity, and learning becomes a joyful
              journey. Together, we nurture confident, independent, and
              compassionate young minds..
            </h6>
          </div>
          <div className="ftop-2 md:w-[25%] w-full text-end md:pt-0 pt-10">
            <Link to={"/contact"}>
              <button className="bg-black text-white py-4 rounded-[50px] italic flex items-center gap-4 px-10 text-[20px] cursor-pointer font-[cursive]">
                Connect with us{" "}
                <MoveUpRight className="bg-[#48a8df] rounded-[50px] p-1 md:w-10 w-7 md:h-10 h-7 hover:translate-x-6 transition-all" />
              </button>
            </Link>
          </div>
        </div>
        <div className="footer-bottom md:pt-20 pt-10 md:flex flex flex-wrap justify-between">
          <div className="fb-1 md:w-1/2 w-full pb-5">
            <h6 className="text-white/60 font-bold pb-5 font-[cursive]">Social Links</h6>
            <ul className="text-white text-[18px] ">
              <li className="hover:text-red-600 cursor-pointer pb-2 font-[cursive]">
                <a href="https://www.facebook.com/people/Carnival-Kids-Montessori/100057778115140/" className="md:flex justify-start items-center">
                  <RiFacebookFill />
                  Facebook
                </a>
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                <a href="https://www.instagram.com/carnival_kids_montessori/" className="md:flex justify-start items-center font-[cursive]">
                  <RiInstagramFill /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="fb-2 md:w-1/4 w-full pb-5 md:mt-0 mt-5">
            <h6 className="text-white/60 font-bold pb-5 font-[cursive]">Quick Links</h6>
            <ul className="text-white text-[18px] md:flex flex flex-col">
              <Link to={"/about"} className="hover:text-red-600 cursor-pointer font-[cursive]">
                About
              </Link>
              <Link
                to={"/curriculam"}
                className="hover:text-red-600 cursor-pointer font-[cursive]"
              >
                Curriculam
              </Link>
              <Link
                to={"/gallery"}
                className="hover:text-red-600 cursor-pointer font-[cursive]"
              >
                Gallery
              </Link>
              <Link
                to={"/contact"}
                className="hover:text-red-600 cursor-pointer font-[cursive]"
              >
                Contact
              </Link>
              <Link to={"/blog"} className="hover:text-red-600 cursor-pointer font-[cursive]">
                Blog
              </Link>
            </ul>
          </div>
          <div className="fb-3 md:w-1/4 w-full md:pt-0 pt-10">
            <ul className="text-white">
              <h6 className="text-white/60 font-bold pb-5 font-[cursive]">Address</h6>
              <li className="text-[18px] text-white font-[cursive]">
                No 9, Rajalakshmi Nagar, Subramaniam palayam, GN Mills,
                Coimbatore – 641029
              </li>
            </ul>
            <ul className="text-white md:pt-5 pt-3 md:mt-0 mt-3">
              <h6 className="text-white/60 font-bold pb-3">Contact</h6>
              <li className="text-[18px] text-white font-[cursive]">
                Mobile : +91 98402 22744
              </li>

              <li className="text-[18px] text-white font-[cursive]">
                Email : info@carnivalkidsmontessori.com{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right text-white/50 font-[cursive] text-[14px] md:pt-0 pt-10">
          <p>© 2025 - Carnival Kids Developed by Prism Adverto</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
