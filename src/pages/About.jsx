import React from "react";
import NavMenu from "../components/NavMenu";
import AboutBg from "../assets/14.jpg";
import { motion } from "framer-motion";
import abtImage from "../assets/10.jpg";
import Footer from "../components/Footer";
import Ami from "../assets/Ami.png";
import PopupForm from "../components/PopupForm";

const About = () => {
  return (
    <>
      <div
        className="abt-main w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavMenu />
        <h2 className="text-white text-4xl font-semibold pt-[500px] px-10">
          About
        </h2>
      </div>
      <div className="py-20 px-10 md:flex justify-between gap-3">
        <div className="md:w-1/2 w-full">
          <h5 className="text-end md:text-3xl text-[20px] font-normal">
            learn through   <br /> hands-on experiences, <br /> independence, and play.
          </h5>
        </div>
        <div className="md:w-1/2 w-full md:py-0 py-3 md:text-5xl text-4xl font-bold uppercase border-l-[30px] border-l-blue-300">
          <div className="relative -left-4">
            <p>Responsibility</p>
            <p>Effort</p>
            <p>Attitude</p>
            <p>Choice</p>
            <p>Humanity</p>
          </div>
        </div>
      </div>
      {/* abt img */}
      <div className="md:flex justify-around items-start gap-5 pt-10">
        <div>
          <img src={abtImage} alt=""/>
        </div>
        <div>
          <p className="text-2xl px-5 md:py-0 py-10">
            Welcome to Carnival Kids Montessori School, where learning is not
            just about books, but about discovering the world through curiosity
            and creativity. Located in GN Mills, Coimbatore, we provide a safe
            and nurturing space for children aged 3 to 6 years to explore,
            learn, and grow with confidence.
          </p>
        </div>
      </div>

      {/* abt us */}
      <div className="md:flex justify-between items-start gap-10 md:px-30 px-5 py-10 bg-blue-700">
        <div className="abt-left md:w-1/2 w-full">
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            {" "}
            <g clip-path="url(#clip0_104_26)">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M107.143 0H92.8571V82.7556L34.3401 24.2385L24.2386 34.3401L82.7556 92.8571H0V107.143H82.7555L24.2386 165.66L34.3401 175.761L92.8571 117.244V200H107.143V117.244L165.66 175.761L175.761 165.66L117.244 107.143H200V92.8571H117.244L175.761 34.34L165.66 24.2385L107.143 82.7555V0Z"
                fill="url(#paint0_linear_104_26)"
              />{" "}
            </g>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_104_26"
                x1="20.5"
                y1="16"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stop-color="#ACAAFF" />{" "}
                <stop offset="1" stop-color="#C0E8FF" />{" "}
              </linearGradient>{" "}
              <clipPath id="clip0_104_26">
                {" "}
                <rect width="200" height="200" fill="white" />{" "}
              </clipPath>{" "}
            </defs>{" "}
          </motion.svg>
          <h3 className="text-5xl font-bold uppercase text-white">
            Montessori Education
          </h3>
        </div>
        <div className="abt-right text-white/60">
          <p className="py-2 text-[18px]">
            The Montessori Method of education developed by Dr. Maria Montessori
            is a child-centered, development-based approach to education. Dr.
            Maria Montessori observed that the child absorbs from the
            environment they are in. She also believed that when children work
            on their own, they could reach new levels of independence. They
            become self-motivated and have better understanding. Dr. Montessori
            used specially designed materials, to incite the child’s inner
            desire to learn.
          </p>
          <p className="py-2 text-[18px]">
            The period from birth to six years the young child has special
            powers. The child learns by unconsciously taking in everything
            around him and constructs himself, just like a sponge in water.
            Using his senses, he creates himself by absorbing everything from
            his environment through living in his environment. He does this
            easily and naturally.
          </p>
          <p className="py-2 text-[18px]">
            From birth to three years old, the young child unknowingly or
            unconsciously acquires his basic abilities. The child’s work during
            this period is to become independent from the adult for his basic
            human functions. He learns to speak, to walk, to gain control of his
            hands and to master his bodily functions. Once the child achieves
            these basic skills, by about three years old, he moves into the next
            phase. During this period, the child starts developing his will. In
            this phase he needs freedom to move, freedom to choose and freedom
            to concentrate. This is the period when the child comes to the
            Montessori Environment.
          </p>

          <h5 className="text-white font-bold pt-10">
            AMI Certified Montessori Adult
          </h5>
          <img src={Ami} alt="" className="w-[150px] pt-2" />
        </div>
      </div>

      {/* Logo */}
      <div className="md:flex flex-col justify-center">
        <h1 className="md:text-4xl text-2xl md:px-50 px-5 py-20">
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              y: [0, -20, 0], // moves up (-20px) and comes back down
            }}
            transition={{
              duration: 2, // time for one full cycle
              repeat: Infinity, // loop forever
              ease: "easeInOut",
            }}
          >
            {" "}
            <g clip-path="url(#clip0_231_793)">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z"
                fill="url(#paint0_linear_231_793)"
              />{" "}
            </g>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_231_793"
                x1="177"
                y1="-9.23648e-06"
                x2="39.5"
                y2="152.5"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stop-color="#B0B9FF" />{" "}
                <stop offset="1" stop-color="#E7E9FF" />{" "}
              </linearGradient>{" "}
              <clipPath id="clip0_231_793">
                {" "}
                <rect width="200" height="200" fill="white" />{" "}
              </clipPath>{" "}
            </defs>{" "}
          </motion.svg>
          Children are naturally interested in activities that are done in the
          day to day living like sweeping, mopping or washing clothes etc
        </h1>
      </div>

      {/* Footer start */}
      <Footer />
      <PopupForm />
    </>
  );
};

export default About;
