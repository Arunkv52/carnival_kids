import React from "react";
import Header from "../components/Header";
import VideoBlue from "../assets/video-blue.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/Footer";
import MyCarousal from "../components/MyCarousal";
import ScrollVelocity from "../components/ScrollVelocity";
import EducationImg from "../assets/8.webp";
import EducationImg1 from "../assets/6.webp";
import EducationImg2 from "../assets/4.webp";


import PopupForm from "../components/PopupForm";
import Fun3d from "../assets/cartoon/outer-space.jpg";
import NavMenu from "../components/NavMenu";
import './Home.css'

const Home = () => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();
  // Transform scroll progress (0-1) to width percentage (20% → 100%)
  const width = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);
  return (
    <>

      {/* Banner start */}
      <div className="ban-start">

      </div>
      {/* Start */}
      <div className="bg-[#E0F7FA] md:px-50 px-5 py-20 ">
        <div className="md:flex justify-evenly items-end gap-5">
          <h1 className="text-black md:text-6xl text-4xl font-semibold pb-2">
            Welcome to Carnival Kids <span className="text-black/60">Montessori</span>
          </h1>
          <div>
            <p className="text-black md:text-[20px] text-[20px] md:pb-0 pb-5">
              We believe  <strong>every child</strong>  is naturally curious, capable, and eager to
              learn. Our Montessori environment nurtures <strong> independence, </strong>
              creativity, and <strong>confidence helping</strong> children grow into
              compassionate, <strong>lifelong learners.</strong>
            </p>
          </div>
        </div>
      </div>
      {/* <NavMenu/> */}

      {/* Image rounded start */}
      <div className="img-round md:px-10 px-5 md:py-10 py-0 hidden md:block">
        <div className=" text-black text-left md:py-20 py-10 md:rounded-3xl rounded-none md:flex justify-around gap-5">
          <div>
            <h1 className="md:text-5xl text-3xl md:pb-10 pb-0 leading-14 ">
              We Believe{" "}
              <span className="bg-[#cee4fd]">Every Child</span> is Unique{" "}
              <span className="bg-[#fefa9c]">and Learns</span>
            </h1>
          </div>
          <div className="">
            <div className="video flex justify-left md:py-10 py-5">
              <motion.video
                src={VideoBlue}
                autoPlay
                muted
                loop
                playsInline
                style={{ width }}
                className="md:rounded-lg rounded-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Explore our programs */}
      <div className="explore md:px-10 px-5 md:py-0 py-10 mb-5">
        <div className="explore-carousal md:py-0 py-0 px-0.5">
          <MyCarousal />
        </div>
      </div>


      {/* Content */}
      <div className="md:pt-10 pt-0 md:pb-30 pb-0 md:py-20 py-0">
        <div className="md:px-10 px-0">
          <div className="md:px-100 px-10">
            <h4 className="md:text-6xl text-4xl  md:pb-20 pb-3">
              At <span className="text-blue-400">Carnival Kids,</span>  we don’t just teach – we inspire a love for
              <span className="text-[#ffaab8]"> learning!</span>
            </h4>
          </div>
        </div>
        <div className="boxy md:px-10 md:py-0 py-10 md:flex md:flex-row flex flex-col justify-between items-center md:gap-5 gap-20">
          <div className="relative bg-[#f4ff9f] py-15 px-10 md:m-0 m-10 text-center text-black rounded-full">
            <span className="absolute top-[-20px] left-[30px] w-[80px] h-[80px] bg-[#f4ff9f] rounded-full"></span>
            <span className="absolute top-[-30px] right-[40px] w-[100px] h-[100px] bg-[#f4ff9f] rounded-full"></span>
            <span className="absolute bottom-[-25px] left-[60px] w-[90px] h-[90px] bg-[#f4ff9f] rounded-full"></span>
            <h2 className="md:text-3xl text-4xl pt-5">Explore the World</h2>
            <p className="text-[18px] py-4">
              Through curiosity, play, and creativity, children discover
              knowledge beyond textbooks.
            </p>
          </div>


          <div className="relative bg-[#f4ff9f] py-15 px-10 md:m-0 m-10 text-center text-black rounded-full">
            <span className="absolute top-[-20px] left-[30px] w-[80px] h-[80px] bg-[#f4ff9f] rounded-full"></span>
            <span className="absolute top-[-30px] right-[40px] w-[100px] h-[100px] bg-[#f4ff9f] rounded-full"></span>
            <span className="absolute bottom-[-25px] left-[60px] w-[90px] h-[90px] bg-[#f4ff9f] rounded-full"></span>
            <h2 className="text-black md:text-3xl text-4xl  pt-5 ">
              Grow with Confidence
            </h2>
            <p className="text-black text-[18px] py-4">
              Nurturing every child to become confident, independent, and
              compassionate individuals.
            </p>
          </div>
          <div className="relative bg-[#f4ff9f] py-15 px-10 md:m-0 m-10 text-center text-black rounded-full">
            <span className="absolute top-[-20px] left-[30px] w-[80px] h-[80px] bg-[#f4ff9f] rounded-full"></span>
            <span className="absolute top-[-30px] right-[40px] w-[100px] h-[100px] bg-[#f4ff9f] rounded-full"></span>
            <span className="absolute bottom-[-25px] left-[60px] w-[90px] h-[90px] bg-[#f4ff9f] rounded-full"></span>

            <h2 className="text-black md:text-3xl text-4xl pt-5 ">
              Learn at Own Pace
            </h2>
            <p className="text-black text-[18px] py-4">
              Hands-on Montessori methods encourage independence and
              personalized learning.
            </p>
          </div>
        </div>
      </div>


      {/* timeline item */}
      <div className="bg-[#f3f0f0] text-black pt-20 pb-50 relative">
       <h4 className="text-black text-5xl font-normal text-center py-10">Admission <span className="text-blue-500 font-semibold">Open</span></h4>
        {/* SVG Wave Path */}
        <svg
          viewBox="0 0 1000 400"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 200 Q 250 100 500 200 T 1000 200"
            fill="none"
            stroke="#f4ff9f"
            strokeWidth="4"
          />
        </svg>

        {/* Timeline Content */}
        <div className="relative flex flex-col items-center">
          <div className="md:flex justify-evenly items-center gap-30">
            {/* Item 1 */}
            <div className="flex flex-col items-center gap-8 relative md:-top-20 top-0">
              <div className="w-[250px] h-[250px] rounded-full border-2 border-[#f4ff9f] overflow-hidden shadow-xl">
                <img src={EducationImg} alt="Age 3-6" className="w-full h-full object-cover" />
              </div>
              <div className="text-black">
                <p className="text-2xl">
                  Age 3 to 6 years
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center gap-8 relative md:top-0 top-10">
              <div className="w-[250px] h-[250px] rounded-full border-2 border-[#f4ff9f] overflow-hidden shadow-xl">
                <img src={EducationImg1} alt="Age 3-6" className="w-full h-full object-cover" />
              </div>
              <div className="text-black">
                <p className="text-2xl">
                  Mont 1 Mont 2 Mont 3
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center gap-8 relative top-20">
              <div className="w-[250px] h-[250px] rounded-full border-2 border-[#f4ff9f] overflow-hidden shadow-xl">
                <img src={EducationImg2} alt="Age 3-6" className="w-full h-full object-cover" />
              </div>
              <div className="text-black">
                <p className="text-2xl">
                  Explore Campus
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* black box */}
      <div className="black-box md:px-10 px-5 bg-[#fdfdfd]">
        <div className="md:flex justify-between gap-5">
          <div className="box-left md:w-1/2 w-full md:py-20 py-10 md:px-10 px-2">
            <p className="text-black py-1 px-3 rounded-2xl bg-[#fefa9c]  w-fit">
              Our Vision
            </p>
            <h3 className="text-black md:text-6xl text-4xl py-5">
              Building Tomorrow’s <span className="text-blue-400">Compassionate</span> Citizens
            </h3>
            <p className="text-black/80 md:text-[18px] text-[20px]">
              We envision Carnival Kids as a place where children blossom into
              self-reliant, creative, and confident learners who are prepared
              not only for school but for life.
            </p>
            <p className="text-black/80 md:text-[18px] text-[20px]">
              We aspire to empower young minds with values, skills, and
              knowledge to become compassionate citizens of tomorrow.
            </p>
          </div>
          <div className="box-right md:w-1/2 w-full md:py-0 py-5">
            <img
              src={Fun3d}
              alt=""
              className="w-full md:h-10/12 h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="py-10 md:px-100 px-0 bg-[#f9f4e8]">
        <h3 className="text-black md:text-5xl text-4xl py-5 md:text-center pb-10 md:px-0 px-5">Programs <span className="text-[#11B6C6]">Information</span> </h3>
        <div className="md:flex md:flex-row justify-around items-start gap-10 flex flex-col px-5 md:px-0">
          <div className="">
            <div>
              <h5 className="text-[20px] font-semibold py-3">
                Toddler (18 months – 3 years)
              </h5>
              <p className="text-[18px] ">
                Building strong foundations in independence, communication, and
                early language development.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h5 className="text-[20px] font-semibold py-3">
                Primary (3 – 6 years)
              </h5>
              <p className="text-[18px]">
                Developing strong foundations in math, literacy, and social
                interaction.
              </p>
            </div>
          </div>
         
        </div>

      </div>

      {/* Testimonials */}
      <div>

      </div>

      <Footer />

      {/* popup form */}
      <PopupForm />
    </>
  );
};

export default Home;
