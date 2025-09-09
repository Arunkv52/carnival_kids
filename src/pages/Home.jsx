import React from "react";
import Header from "../components/Header";
import VideoBlue from "../assets/video-blue.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/Footer";
import MyCarousal from "../components/MyCarousal";
import ScrollVelocity from "../components/ScrollVelocity";
import EducationImg from "../assets/cartoon/kids-bg.webp";
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
          <h1 className="text-black md:text-6xl text-2xl font-semibold">
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
              <span className="bg-[#54b1e3]">Every Child</span> is Unique{" "}
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
      <div className="explore md:px-10 px-5 md:py-0 py-20 mb-15">
        <div className="explore-carousal md:py-0 py-0 px-0.5">
          <MyCarousal />
        </div>
      </div>


      {/* Content */}
      <div className="md:pt-0 md:pb-30 pb-0 py-20">
        <div className="md:px-10 px-5">
          <div className="px-100">
            <h4 className="md:text-6xl text-4xl  md:pb-20 pb-3">
              At <span className="text-blue-400">Carnival Kids,</span>  we don’t just teach – we inspire a love for
              <span className="text-yellow-300"> learning!</span>
            </h4>
          </div>
        </div>
        <div className="boxy md:px-10 md:py-0 py-10 md:flex justify-between items-center gap-5">
          <div className="relative bg-[#5cc5fd] py-15 px-10 md:m-0 m-3 text-center text-white rounded-full">
            <span className="absolute top-[-20px] left-[30px] w-[80px] h-[80px] bg-[#5cc5fd] rounded-full"></span>
            <span className="absolute top-[-30px] right-[40px] w-[100px] h-[100px] bg-[#5cc5fd] rounded-full"></span>
            <span className="absolute bottom-[-25px] left-[60px] w-[90px] h-[90px] bg-[#5cc5fd] rounded-full"></span>
            <h2 className="md:text-3xl text-4xl pt-5">Explore the World</h2>
            <p className="text-[18px] py-4">
              Through curiosity, play, and creativity, children discover
              knowledge beyond textbooks.
            </p>
          </div>


          <div className="relative bg-[#5cc5fd] py-15 px-10 md:m-0 m-3 text-center text-white rounded-full">
            <span className="absolute top-[-20px] left-[30px] w-[80px] h-[80px] bg-[#5cc5fd] rounded-full"></span>
            <span className="absolute top-[-30px] right-[40px] w-[100px] h-[100px] bg-[#5cc5fd] rounded-full"></span>
            <span className="absolute bottom-[-25px] left-[60px] w-[90px] h-[90px] bg-[#5cc5fd] rounded-full"></span>
            <h2 className="text-white md:text-3xl text-4xl  pt-5 ">
              Grow with Confidence
            </h2>
            <p className="text-white text-[18px] py-4">
              Nurturing every child to become confident, independent, and
              compassionate individuals.
            </p>
          </div>
          <div className="relative bg-[#5cc5fd] py-15 px-10 md:m-0 m-3 text-center text-white rounded-full">
            <span className="absolute top-[-20px] left-[30px] w-[80px] h-[80px] bg-[#5cc5fd] rounded-full"></span>
            <span className="absolute top-[-30px] right-[40px] w-[100px] h-[100px] bg-[#5cc5fd] rounded-full"></span>
            <span className="absolute bottom-[-25px] left-[60px] w-[90px] h-[90px] bg-[#5cc5fd] rounded-full"></span>

            <h2 className="text-white md:text-3xl text-4xl pt-5 ">
              Learn at Own Pace
            </h2>
            <p className="text-white text-[18px] py-4">
              Hands-on Montessori methods encourage independence and
              personalized learning.
            </p>
          </div>
        </div>
      </div>


      {/* scroll item */}
      <div className="scr-bg flex justify-start items-start gap-3 bg-[#d7f7fa]">
        <div className="w-full py-20 px-10">
          <h4 className="text-black text-5xl font-normal text-center">Admission <span className="text-blue-500 font-semibold">Open</span></h4>
          <div className="flex justify-start gap-5 py-5">
            <div>
              <img src={EducationImg} alt="" className="rounded-[10px] shadow-2xl" />
              <p className="text-[20px] py-3 font-semibold">Age 3 to 6 years</p>
            </div>
            <div>
              <img src={EducationImg} alt="" className="rounded-[10px] shadow-2xl" />
              <p className="text-[20px] py-3 font-semibold">Mont 1 mont 2 Mont 3</p>
            </div>
            <div>
              <img src={EducationImg} alt="" className="rounded-[10px] shadow-2xl" />
              <p className="text-[20px] py-3 font-semibold">Explore Campus</p>
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

      <div className="py-10 md:px-50 bg-[#f9f4e8]">
        <h3 className="text-black md:text-4xl text-4xl py-5 text-center pb-10">Programs Information</h3>
        <div className="flex justify-around items-start gap-10">
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
          <div>
            <div>
              <h5 className="text-[20px]  font-semibold py-3">
                Parents
              </h5>
              <p className="text-[18px] mb-5">
               Our Parent Representatives organise regular fund raising and social events.
              </p>
              <button className="border-2 rounded-[50px] px-8 py-2 hover:border-none hover:bg-blue-400 cursor-pointer">Visit</button>
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
