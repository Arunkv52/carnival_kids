import React from "react";
import Header from "../components/Header";
import VideoBlue from "../assets/video-blue.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/Footer";
import MyCarousal from "../components/MyCarousal";
import ScrollVelocity from "../components/ScrollVelocity";
import FallingText from "../components/FallingText";
import EducationImg from "../assets/DSC00203.jpg";
import PopupForm from "../components/PopupForm";

const Home = () => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();
  // Transform scroll progress (0-1) to width percentage (20% → 100%)
  const width = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);
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
          <div>
            <p className="text-white md:text-[20px] text-[16px] md:pb-0 pb-5">
              Our mission is to build a strong foundation for lifelong learning
              by creating a joyful, safe, and stimulating environment where
              children can.
            </p>
          </div>
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
      <div className="img-round md:px-10 px-5 md:py-10 py-0 hidden md:block">
        <div className=" text-black text-left font-bold md:py-20 py-10 md:rounded-3xl rounded-none md:flex justify-around">
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
              We Believe Every Child is Unique and Learns
            </h1>
          </div>
        </div>
      </div>

      {/* Explore our programs */}
      <div className="explore md:px-10 px-5 md:py-0 py-20">
        <div className="explore-carousal md:py-10 py-0 px-0.5">
          <MyCarousal />
        </div>
      </div>
      {/* Scrollvelocity */}
      <div className="scroll-velocity md:py-30 py-10">
        <ScrollVelocity />
      </div>
      {/* Content */}
      <div className="md:pt-10 md:pb-20 pb-0 py-0">
        <div className="md:px-10 px-5 md:flex justify-between">
          <div>
            <h4 className="md:text-6xl text-4xl font-bold md:pb-10 pb-3">
              At Carnival Kids, we don’t just teach – we inspire a love for
              learning!
            </h4>
          </div>
          <div>
            <p className="md:text-[20px] text-[16px] text-black/70">
              At Carnival Kids, we believe every child is unique and learns best
              in a nurturing environment. Our Montessori-based approach helps
              children develop independence, creativity, confidence, and social
              skills while making learning fun and meaningful.
            </p>
          </div>
        </div>
        <div className="boxy md:px-10 md:py-0 py-10 md:flex justify-between items-center gap-5">
          <div className="bg-red-700 p-10 md:m-0 m-3">
            <h2 className="text-white md:text-5xl text-4xl font-bold">
              Explore the World
            </h2>
            <p className="text-white text-[17px] py-2">
              Through curiosity, play, and creativity, children discover
              knowledge beyond textbooks.
            </p>
          </div>
          <div className="bg-blue-700 p-10  md:m-0 m-3">
            <h2 className="text-white md:text-5xl text-4xl font-bold">
              Learn at Their Own Pace
            </h2>
            <p className="text-white text-[17px] py-2">
              Hands-on Montessori methods encourage independence and
              personalized learning.
            </p>
          </div>
          <div className="bg-yellow-500 p-10  md:m-0 m-3">
            <h2 className="text-white md:text-5xl text-4xl font-bold">
              Grow with Confidence
            </h2>
            <p className="text-white text-[17px] py-2">
              Nurturing every child to become confident, independent, and
              compassionate individuals.
            </p>
          </div>
        </div>
      </div>

      {/* black box */}
      <div className="black-box md:px-10 px-5 bg-linear-to-r from-transparent to-blue-500">
        <div className="md:flex justify-between gap-5">
          <div className="box-left md:w-1/2 w-full md:py-50 py-10 md:px-10 px-2">
            <p className="text-white py-1 px-3 rounded-2xl bg-red-600 w-fit">
              Our Vision
            </p>
            <h3 className="text-black md:text-6xl text-3xl font-bold py-5">
              Building Tomorrow’s Compassionate Citizens
            </h3>
            <p className="text-black/80 md:text-[20px] text-[16px]">
              We envision Carnival Kids as a place where children blossom into
              self-reliant, creative, and confident learners who are prepared
              not only for school but for life.
            </p>
            <p className="text-black/80 md:text-[20px] text-[16px]">
              We aspire to empower young minds with values, skills, and
              knowledge to become compassionate citizens of tomorrow.
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

      {/* popup form */}
      <PopupForm />
    </>
  );
};

export default Home;
