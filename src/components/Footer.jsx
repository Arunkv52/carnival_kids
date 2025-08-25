import React from "react";
import { MoveUpRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-600 px-10 py-20">
        <div className="footer-top md:flex">
          <div className="ftop-1 w-[75%]">
            <h6 className="text-white text-4xl">
              Carnival Kids is built by an interdisciplinary team working at the
              intersection of science, education and storytelling.
            </h6>
          </div>
          <div className="ftop-2 w-[25%] text-end">
            <button className="bg-black text-white py-4 rounded-[50px] flex items-center gap-4 px-10 text-[20px]">
              Connect with us{" "}
              <MoveUpRight className="bg-blue-600 rounded-[50px] p-1 w-10 h-10 hover:translate-x-6 transition-all" />
            </button>
          </div>
        </div>
        <div className="footer-bottom pt-20 md:flex justify-between">
          <div className="fb-1 w-1/2">
            <ul className="text-white text-[20px]">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div className="fb-2 w-1/4">
            <ul className="text-white text-[20px]">
              <li>About</li>
              <li>Curriculam</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="fb-3 w-1/4">
            <ul className="text-white text-[20px]">
              <li className="font-semibold">Address</li>
              <li className="text-[16px] text-white/80">
                Opp To Perks Manchester, Rajiv Gandhi Nagar Road Coimbatore-
                641015
              </li>
            </ul>
            <ul className="text-white text-[20px] pt-6">
              <li className="font-semibold">Contact</li>
              <li className="text-[16px] text-white/80">M : +91 98566 11111</li>
              <li className="text-[16px] text-white/80">T : 0422-298546 </li>
              <li className="text-[16px] text-white/80">E : info@carnivalkids.com </li>
            </ul>
          </div>
         
        </div>
        <div className="copy-right text-white">
            <p>© 2025 - Alrights Reserved by Prism Adverto Pvt Ltd</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
