import React from "react";
import Header from "../components/Header";
import VideoBlue from "../assets/video-blue.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/Footer";
import MyCarousal from "../components/MyCarousal";
import ScrollVelocity from "../components/ScrollVelocity";
import EducationImg from "../assets/DSC00203.jpg";
import PopupForm from "../components/PopupForm";
import Fun3d from "../assets/cartoon/outer-space.jpg";
import Fun from "../assets/cartoon/fun-3.jpg";
import Learn from "../assets/cartoon/Learn.jpg";

const Home = () => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();
  // Transform scroll progress (0-1) to width percentage (20% → 100%)
  const width = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);
  return (
    <>
      <Header />
      {/* Start */}
      <div className="bg-[#54b1e3] md:px-50 px-5 py-20 ">
        <div className="md:flex justify-between items-end gap-5">
          <h1 className="text-white md:text-7xl text-4xl font-bold font-[Delicious_Handrawn]">
            OUR <br />
            MISSION
          </h1>
          <div>
            <p className="text-white md:text-[18px] text-[16px] md:pb-0 pb-5 italic font-bold">
              Our mission is to build a strong foundation for lifelong learning
              by creating a joyful, safe, and stimulating environment where
              children can.
            </p>
          </div>
        </div>
        <svg
          width="100"
          height="100"
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
              <stop offset="0.0509862" stop-color="#fef854" />{" "}
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
          <div>
            <h1 className="md:text-7xl text-3xl md:pb-10 pb-0 leading-20  font-[Delicious_Handrawn]">
              We Believe{" "}
              <span className="bg-[#54b1e3] italic">Every Child</span> is Unique{" "}
              <span className="bg-[#fef854] italic">and Learns</span>
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
      <div className="explore md:px-10 px-5 md:py-0 py-20">
        <div className="explore-carousal md:py-0 py-0 px-0.5">
          <MyCarousal />
        </div>
      </div>
      {/* Scrollvelocity */}
      <div className="scroll-velocity md:py-30">
        <ScrollVelocity />
      </div>
      {/* Content */}
      <div className="md:pt-0 md:pb-30 pb-0 py-10">
        <div className="md:px-10 px-5">
          <div>
            <h4 className="md:text-6xl text-4xl font-[Delicious_Handrawn] font-bold md:pb-10 pb-3">
              At Carnival Kids, we don’t just teach – we inspire a love for
              learning!
            </h4>
          </div>
        </div>
        <div className="boxy md:px-10 md:py-0 py-10 md:flex justify-between items-center gap-5">
          <div className="bg-[#5cc5fd] p-10 md:m-0 m-3">
            <svg
              width="100"
              height="100"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clip-path="url(#clip0_133_21)">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M99.9759 100C44.7585 99.987 -2.80187e-06 55.2204 -7.62939e-06 1.74846e-05L200 0C200 55.2204 155.242 99.987 100.024 100C155.242 100.013 200 144.78 200 200H1.11288e-06C1.11288e-06 144.78 44.7585 100.013 99.9759 100Z"
                  fill="url(#paint0_linear_133_21)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_133_21"
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
                <clipPath id="clip0_133_21">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <h2 className="text-white md:text-5xl text-4xl font-bold pt-5 font-[Delicious_Handrawn]">
              Explore the World
            </h2>
            <p className="text-white text-[17px] py-4 italic font-semibold">
              Through curiosity, play, and creativity, children discover
              knowledge beyond textbooks.
            </p>
          </div>

          <div className="bg-[#e1da0e] p-10  md:m-0 m-3">
            <svg
              width="100"
              height="100"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clip-path="url(#clip0_133_21)">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M99.9759 100C44.7585 99.987 -2.80187e-06 55.2204 -7.62939e-06 1.74846e-05L200 0C200 55.2204 155.242 99.987 100.024 100C155.242 100.013 200 144.78 200 200H1.11288e-06C1.11288e-06 144.78 44.7585 100.013 99.9759 100Z"
                  fill="url(#paint0_linear_133_21)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_133_21"
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
                <clipPath id="clip0_133_21">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <h2 className="text-white md:text-5xl text-4xl  font-bold pt-5 font-[Delicious_Handrawn]">
              Grow with Confidence
            </h2>
            <p className="text-white text-[17px] py-4 italic font-semibold">
              Nurturing every child to become confident, independent, and
              compassionate individuals.
            </p>
          </div>
          <div className="bg-[#54b1e3] p-10  md:m-0 m-3">
            <svg
              width="100"
              height="100"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clip-path="url(#clip0_133_21)">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M99.9759 100C44.7585 99.987 -2.80187e-06 55.2204 -7.62939e-06 1.74846e-05L200 0C200 55.2204 155.242 99.987 100.024 100C155.242 100.013 200 144.78 200 200H1.11288e-06C1.11288e-06 144.78 44.7585 100.013 99.9759 100Z"
                  fill="url(#paint0_linear_133_21)"
                />{" "}
              </g>{" "}
              <defs>
                {" "}
                <linearGradient
                  id="paint0_linear_133_21"
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
                <clipPath id="clip0_133_21">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <h2 className="text-white md:text-5xl text-4xl font-bold pt-5 font-[Delicious_Handrawn]">
              Learn at Own Pace
            </h2>
            <p className="text-white text-[17px] py-4 italic font-semibold">
              Hands-on Montessori methods encourage independence and
              personalized learning.
            </p>
          </div>
        </div>
      </div>

      {/* black box */}
      <div className="black-box md:px-10 px-5 bg-[#fdfdfd]">
        <div className="md:flex justify-between gap-5">
          <div className="box-left md:w-1/2 w-full md:py-20 py-10 md:px-10 px-2">
            <p className="text-black py-1 px-3 rounded-2xl bg-[#fef854] font-[Delicious_Handrawn] w-fit">
              Our Vision
            </p>
            <h3 className="text-black md:text-6xl text-3xl font-[Delicious_Handrawn] font-bold py-5">
              Building Tomorrow’s Compassionate Citizens
            </h3>
            <p className="text-black/80 md:text-[18px] italic text-[16px]">
              We envision Carnival Kids as a place where children blossom into
              self-reliant, creative, and confident learners who are prepared
              not only for school but for life.
            </p>
            <p className="text-black/80 md:text-[18px] italic text-[16px]">
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

      <div className="py-10 px-10">
        <h3 className="text-4xl font-semibold font-[Delicious_Handrawn]">
          Our Programs
        </h3>
       
        <div className="md:flex justify-between items-start gap-5 py-10">
          <div className="bg-gray-500 p-10 max-w-fit">
            <div>
              <svg
                width="100"
                height="100"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_105_666)">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M100 22C100 9.84974 90.1503 0 78 0H22C9.84974 0 0 9.84972 0 22V78.7194C0 90.8697 9.84974 100.719 22 100.719H78C90.1503 100.719 100 110.569 100 122.719V178C100 190.15 109.85 200 122 200H178C190.15 200 200 190.15 200 178V121.28C200 109.13 190.15 99.2805 178 99.2805H122C109.85 99.2805 100 89.4308 100 77.2805V22Z"
                    fill="url(#paint0_linear_105_666)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_105_666"
                    x1="14"
                    y1="26"
                    x2="179"
                    y2="179.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stop-color="#E9B8FF" />{" "}
                    <stop offset="1" stop-color="#F9ECFF" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_105_666">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
              <h5 className="text-white text-3xl font-[Delicious_Handrawn] pt-5 pb-3">
               Toddler (18 months – 3 years)
              </h5>
              <p className="text-[18px] italic text-white">
                Building independence and early language skills.
              </p>
            </div>
          </div>
          <div className="bg-gray-500 p-10 max-w-fit">
            <div>
              <svg
                width="100"
                height="100"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_105_666)">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M100 22C100 9.84974 90.1503 0 78 0H22C9.84974 0 0 9.84972 0 22V78.7194C0 90.8697 9.84974 100.719 22 100.719H78C90.1503 100.719 100 110.569 100 122.719V178C100 190.15 109.85 200 122 200H178C190.15 200 200 190.15 200 178V121.28C200 109.13 190.15 99.2805 178 99.2805H122C109.85 99.2805 100 89.4308 100 77.2805V22Z"
                    fill="url(#paint0_linear_105_666)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_105_666"
                    x1="14"
                    y1="26"
                    x2="179"
                    y2="179.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stop-color="#E9B8FF" />{" "}
                    <stop offset="1" stop-color="#F9ECFF" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_105_666">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
              <h5 className="text-white text-3xl font-[Delicious_Handrawn] pt-5 pb-3">
                Primary (3 – 6 years)
              </h5>
              <p className="text-[18px] italic text-white">
                Developing strong foundations in math, literacy, and social interaction.
              </p>
            </div>
          </div>
          <div className="bg-gray-500 p-10 max-w-fit">
            <div>
              <svg
                width="100"
                height="100"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clip-path="url(#clip0_105_666)">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M100 22C100 9.84974 90.1503 0 78 0H22C9.84974 0 0 9.84972 0 22V78.7194C0 90.8697 9.84974 100.719 22 100.719H78C90.1503 100.719 100 110.569 100 122.719V178C100 190.15 109.85 200 122 200H178C190.15 200 200 190.15 200 178V121.28C200 109.13 190.15 99.2805 178 99.2805H122C109.85 99.2805 100 89.4308 100 77.2805V22Z"
                    fill="url(#paint0_linear_105_666)"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <linearGradient
                    id="paint0_linear_105_666"
                    x1="14"
                    y1="26"
                    x2="179"
                    y2="179.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop stop-color="#E9B8FF" />{" "}
                    <stop offset="1" stop-color="#F9ECFF" />{" "}
                  </linearGradient>{" "}
                  <clipPath id="clip0_105_666">
                    {" "}
                    <rect width="200" height="200" fill="white" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
              <h5 className="text-white text-3xl font-[Delicious_Handrawn] pt-5 pb-3">
                Elementary (6 – 12 years)
              </h5>
              <p className="text-[18px] italic text-white">
                Inspiring curiosity, collaboration, and critical thinking for lifelong success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* popup form */}
      <PopupForm />
    </>
  );
};

export default Home;
