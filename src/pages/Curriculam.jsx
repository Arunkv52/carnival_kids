import React from "react";
import FramerStacking from "../components/FramerStacking";
import AboutBg from "../assets/14.jpg";
import NavMenu from "../components/NavMenu";
import PopupForm from "../components/PopupForm";
import Img1 from '../assets/4.webp'


const Curriculam = () => {
  return (
    <>
      <PopupForm />
      <div
        className="abt-main w-full md:py-0"
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavMenu />
        <h2 className="text-white text-6xl font-semibold pt-[500px] px-10 ">
          Curriculam
        </h2>
      </div>
      <NavMenu />

      <div className="md:px-40 px-5 py-20">
        𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼
        <h3 className="md:text-7xl text-4xl pb-5">
          Why Choose Montessori Education?
        </h3>
        <p className="md:text-2xl text-[20px] py-1">
          ✔️ <strong>Individualized Learning </strong> – Children progress at their own pace with
          guidance from Montessori-trained educators.
        </p>
        <p className="md:text-2xl text-[20px] py-1">
          ✔️ <strong>Hands-On Exploration</strong> – Purposeful materials encourage discovery, problem-solving, and critical thinking.
        </p>
        <p className="md:text-2xl text-[20px] py-1">
          ✔️ <strong>Independence & Confidence</strong> – Students develop self-motivation, responsibility, and respect for others.
        </p>
        <p className="md:text-2xl text-[20px] py-1">
          ✔️<strong> Whole-Child Development</strong> – Supporting academic, emotional, and social growth in a joyful setting.
        </p>
      </div>

      <div className="px-20">
        <div className="cur-one bg-blue-300 flex justify-between items-start gap-5 rounded-2xl">
          <div>
            <img src={Img1} alt="" />
          </div>
          <div className="py-10">
            <h2 className="text-5xl font-semibold py-5 text-blue-700">Practical Life</h2>
            <p className="text-[18px]">Children are naturally interested in activities that are done in the day to day living like sweeping, mopping or washing clothes etc. The activities of Practical Life are to help the child gain control and coordination of his movement, help the child to gain independence and thereby adapt to his society. The Practical Life Area has materials that help children to acquire these skills. For example, the various “dressing frames” help toddlers learn to button, zip, and even tie a shoe lace. There are activities like washing hands, washing clothes which are activities of our daily life. Children are offered grace and courtesy activities in groups which help them adapt to the society.
            </p>
          </div>
        </div>
      </div>

      <FramerStacking />
    </>
  );
};

export default Curriculam;
