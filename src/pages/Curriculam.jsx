import React from "react";
import FramerStacking from "../components/FramerStacking";
import AboutBg from "../assets/14.jpg";
import NavMenu from "../components/NavMenu";
import PopupForm from "../components/PopupForm";

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
        <h2 className="text-white text-6xl font-semibold pt-[500px] px-10 font-[Delicious_Handrawn]">
          Curriculam
        </h2>
      </div>
      <NavMenu />

      <div className="md:px-40 py-20">
        𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼
        <h3 className="font-[Delicious_Handrawn] text-6xl pb-5">
          Why Choose Montessori Education?
        </h3>
        <p className="font-[cursive] text-[20px] py-1">
          ✔️ <strong>Individualized Learning </strong> – Children progress at their own pace with
          guidance from Montessori-trained educators.
        </p>
        <p className="font-[cursive] text-[20px] py-1">
          ✔️ <strong>Hands-On Exploration</strong> – Purposeful materials encourage discovery, problem-solving, and critical thinking.
        </p>
        <p className="font-[cursive] text-[20px] py-1">
          ✔️ <strong>Independence & Confidence</strong> – Students develop self-motivation, responsibility, and respect for others.
        </p>
        <p className="font-[cursive] text-[20px] py-1">
          ✔️<strong> Whole-Child Development</strong> – Supporting academic, emotional, and social growth in a joyful setting.
        </p>
      </div>

      <FramerStacking />
    </>
  );
};

export default Curriculam;
