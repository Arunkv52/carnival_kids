import React from "react";
import { MoveUpRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[linear-gradient(98deg,#000000,#48a8df)] md:px-10 px-5 md:py-20 py-10">
        <div className="footer-top md:flex">
          <div className="ftop-1 md:w-[75%] w-full">
            <h6 className="text-white md:text-4xl text-2xl">
              Carnival Kids is built by an interdisciplinary team working at the
              intersection of science, education and storytelling.
            </h6>
          </div>
          <div className="ftop-2 md:w-[25%] w-full text-end md:pt-0 pt-10">
            <button className="bg-black text-white py-4 rounded-[50px] flex items-center gap-4 px-10 text-[20px]">
              Connect with us{" "}
              <MoveUpRight className="bg-[#48a8df] rounded-[50px] p-1 md:w-10 w-7 md:h-10 h-7 hover:translate-x-6 transition-all" />
            </button>
          </div>
        </div>
        <div className="footer-bottom md:pt-20 pt-10 md:flex flex flex-wrap justify-between">
          <div className="fb-1 md:w-1/2 w-full pb-5">
            <ul className="text-white text-[20px]">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div className="fb-2 md:w-1/4 w-full ">
            <ul className="text-white text-[20px]">
              <li>About</li>
              <li>Curriculam</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="fb-3 md:w-1/4 w-full md:pt-0 pt-10">
            <ul className="text-white text-[20px]">
              <li className="font-semibold">Address</li>
              <li className="text-[16px] text-white/80 py-2">
                Opp To Perks Manchester, Rajiv Gandhi Nagar Road Coimbatore-
                641015
              </li>
            </ul>
            <ul className="text-white text-[20px] md:pt-0 pt-3">
              <li className="font-semibold py-2">Contact</li>
              <li className="text-[16px] text-white/80">Mobile : +91 98566 11111</li>
              <li className="text-[16px] text-white/80">Telephone : 0422-298546 </li>
              <li className="text-[16px] text-white/80">Email : info@carnivalkids.com </li>
            </ul>
          </div>
         
        </div>
        <div className="copy-right text-white/50 text-[14px] md:pt-0 pt-10">
            <p>© 2025 - Carnival Kids Developed by Prism Adverto</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
