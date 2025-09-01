import React from "react";
import Header from "../components/Header";
import Kids from "../assets/kids-happy.jpeg";
import { Button } from "../components/ui/button";
import VideoBlue from "../assets/video-blue.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/Footer";
import Smile from "../assets/smile.webp";
import MyCarousal from "../components/MyCarousal";
import ScrollVelocity from "../components/ScrollVelocity";
import SchoolBg from "../assets/school-image.jpg";
import FallingText from "../components/FallingText";
import EducationImg from "../assets/school.png";

const Home = () => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();
  // Transform scroll progress (0-1) to width percentage (20% → 100%)
  const width = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);
  return (
    <>
      <Header />
      {/* Start */}
      <div className="bg-blue-900 md:px-50 px-5 py-20">
        <div className="md:flex justify-between items-end gap-5">
          <h1 className="text-white md:text-6xl text-4xl font-bold">
            OUR <br />
            MISSION
          </h1>

          <p className="text-white md:text-[20px] text-[16px] md:pb-0 pb-5">
            Our inspiring and immersive multimedia resources featuring linear
            and 360˚ videos, VR/AR, interactive media and hands-on projects and
            activities are offered in English and French.
          </p>
        </div>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clip-path="url(#clip0_236_1049)">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M200 2.62268e-06V60L200 200H140V130.033C139.982 168.678 108.649 200 70 200C31.3401 200 0 168.66 0 130C0 91.3401 31.3401 60 70 60C108.649 60 139.982 91.3222 140 129.967V60H70H0V2.62268e-06L140 0L200 2.62268e-06Z"
              fill="url(#paint0_linear_236_1049)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_236_1049"
              x1="157.5"
              y1="32"
              x2="44"
              y2="147.5"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop offset="0.0509862" stop-color="#FFB6E1" />{" "}
              <stop offset="1" stop-color="#FBE3EA" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_236_1049">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
      </div>

      {/* Image rounded start */}
      <div className="img-round md:px-10 px-5 md:py-10 py-0">
        <div className=" text-black text-left font-bold md:py-20 py-10 md:rounded-3xl rounded-none md:flex justify-between">
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
          <div>
            <h1 className="md:text-6xl text-3xl md:pb-10 pb-0">
              Positive Choice-making With a Special Emphasis on Empathy.
            </h1>
          </div>
        </div>
      </div>

      {/* Explore our programs */}
      <div className="explore md:px-10 px-5">
        <div className="explore-carousal md:py-10 py-0 px-0.5">
          <MyCarousal />
        </div>
      </div>
      {/* Scrollvelocity */}
      <div className="scroll-velocity md:py-30 py-10">
        <ScrollVelocity />
      </div>
      {/* Content */}
      <div className="md:py-20 py-0">
        <div className="md:px-10 px-5 md:flex justify-between">
          <div>
            <h4 className="md:text-6xl text-4xl font-bold md:pb-10 pb-3">
              Pastoral Care at the Secondary Level
            </h4>
          </div>
          <div>
            <p className="md:text-[20px] text-[16px] text-black/70">
              Students are assigned a tutor when they arrive at the school. This
              member of staff is the primary contact for pupils and their
              parents as well as other teachers throughout the academic year.
              The tutor takes responsibility for the welfare and academic
              progress of their students and is responsible for expressing and
              relaying praise and concern from other members of staff back to
              the parents. Tutors liaise with parents on a regular basis, giving
              them vital feedback on the student’s life at school. The Head of
              School Life and Well-Being is available as needed as a point of
              contact for any issues. We also organise bonding events,
              after-school and lunch-time icebreaker activities, English as a
              Second Language, and private tutoring where necessary.
            </p>
          </div>
        </div>
        <div className="boxy md:px-10 md:py-0 py-10 md:flex justify-between items-center gap-5">
          <div className="bg-red-700 p-10 md:m-0 m-3">
            <h2 className="text-white md:text-5xl text-4xl font-bold">
              Most Respected Brand
            </h2>
            <p className="text-white text-[17px] py-2">
              Schools in Coimbatore- Education World
            </p>
          </div>
          <div className="bg-blue-700 p-10  md:m-0 m-3">
            <h2 className="text-white md:text-5xl text-4xl font-bold">
              Campus Architecture & Design
            </h2>
            <p className="text-white text-[17px] py-2">
              CBSE School in Coimbatore - Education World
            </p>
          </div>
          <div className="bg-yellow-500 p-10  md:m-0 m-3">
            <h2 className="text-white md:text-5xl text-4xl font-bold">
              Multi-Sports Culture International
            </h2>
            <p className="text-white text-[17px] py-2">
              Schools in Coimbatore - Education World
            </p>
          </div>
        </div>
      </div>

      {/* black box */}
      <div className="black-box md:px-10 px-5 bg-linear-to-r from-transparent to-blue-500">
        <div className="md:flex justify-between gap-5">
          <div className="box-left md:w-1/2 w-full md:py-50 py-10 md:px-10 px-2">
            <p className="text-white py-1 px-3 rounded-2xl bg-red-600 w-fit">
              Northwood By The Numbers
            </p>
            <h3 className="text-black md:text-7xl text-3xl font-bold py-5">
              Leave Your Print. Lead the Pack.
            </h3>
            <p className="text-black/80 md:text-[20px] text-[16px]">
              Our teachers recognize that the majority of our students are going
              through a period of transition. We try to make our school the
              anchor for the child. A warm and welcoming environment can go a
              long way in the adaptation and comfort level of the student.
            </p>
          </div>
          <div className="box-right md:w-1/2 w-full md:py-10 py-5">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clip-path="url(#clip0_116_153)">
                {" "}
                <path
                  d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                  fill="url(#paint0_linear_116_153)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_116_153"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop stop-color="#DF99F7" />{" "}
                  <stop offset="1" stop-color="#FFDBB0" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_116_153">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <img
              src={EducationImg}
              alt=""
              className="w-full md:h-10/12 h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Text Fallen */}
      <div className=" text-black md:px-10 px-2 md:py-20 py-10 cursor-grab">
        <FallingText />
      </div>

      <Footer />
    </>
  );
};

export default Home;
