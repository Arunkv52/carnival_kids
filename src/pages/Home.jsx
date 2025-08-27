import React from "react";
import Header from "../components/Header";
import Kids from "../assets/kids-happy.jpeg";
import { Button } from "../components/ui/button";
import VideoBlue from "../assets/video-blue.mp4";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/Footer";


const Home = () => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();
  // Transform scroll progress (0-1) to width percentage (20% → 100%)
  const width = useTransform(scrollYProgress, [0, 1], ["30%", "100%"]);
  return (
    <>
      <Header />
      {/* About start */}
      <div className="py-20 md:px-40 px-5 text-2xl md:flex justify-start gap-5">
        <div className="lft md:w-1/2 w-full">
          <h2 className="font-bold text-[#0c1637] text-4xl">
            Educating Today's Learners For Tomorrow's World!
          </h2>
          <p className="pt-5 md:pb-30 pb-10 md:text-2xl text-[20px]">
            Ocean School is a free environmental education resource for students
            in grades 5 to 12. Our inspiring and immersive multimedia resources
            featuring linear and 360˚ videos, VR/AR, interactive media and
            hands-on projects and activities are offered in English and French.
            Our cross-curricular content spans science, social studies, language
            arts and more!
          </p>
          <Button className={"px-15 py-6 text-[16px]"}>Connect with us</Button>
        </div>
        <div className="rht md:w-1/2 w-full md:py-0 pt-10">
          <p className="text-[16px] text-black/50 md:pb-10 pb-3 italic">
            "VR/AR, interactive media and hands-on projects and activities are
            offered in English and French. Our cross-curricular content spans
            science, social studies, language arts and more!'
          </p>
          <img src={Kids} alt="" className="rounded-2xl" />
        </div>
      </div>

      {/* Image rounded start */}
      <div className="img-round md:px-10 px-0 md:py-20 py-10">
        <div className="bg-[#48a8df] text-white text-center font-bold md:py-20 py-10 md:rounded-3xl rounded-none">
          <h1 className="md:text-8xl text-4xl md:pb-10 pb-0">Connect with Kids</h1>
          <div className="video flex justify-center md:py-10 py-5">
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

     
     
      <Footer />
    </>
  );
};

export default Home;
