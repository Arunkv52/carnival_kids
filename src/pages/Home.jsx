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
  const width = useTransform(scrollYProgress, [0, 1], ["20%", "100%"]);
  return (
    <>
      <Header />
      {/* About start */}
      <div className="py-20 px-40 text-2xl flex justify-start gap-5">
        <div className="lft w-1/2">
          <h2 className="font-bold text-[#0c1637] text-4xl">
            Educating Today's Learners For Tomorrow's World!
          </h2>
          <p className="pt-5 pb-30 text-2xl">
            Ocean School is a free environmental education resource for students
            in grades 5 to 12. Our inspiring and immersive multimedia resources
            featuring linear and 360˚ videos, VR/AR, interactive media and
            hands-on projects and activities are offered in English and French.
            Our cross-curricular content spans science, social studies, language
            arts and more!
          </p>
          <Button className={"px-15 py-6 text-[16px]"}>Connect with us</Button>
        </div>
        <div className="rht w-1/2">
          <p className="text-[16px] text-black/50 pb-10 italic">
            "VR/AR, interactive media and hands-on projects and activities are
            offered in English and French. Our cross-curricular content spans
            science, social studies, language arts and more!'
          </p>
          <img src={Kids} alt="" className="rounded-2xl" />
        </div>
      </div>

      {/* Image rounded start */}
      <div className="img-round px-10 py-20">
        <div className="bg-blue-500 text-white text-center font-bold py-20 rounded-3xl">
          <h1 className="text-8xl pb-10">Connect with Kids</h1>
          <div className="video flex justify-center py-10">
            <motion.video
              src={VideoBlue}
              autoPlay
              muted
              loop
              playsInline
              style={{ width }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
