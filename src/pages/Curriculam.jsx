import React from "react";
import FramerStacking from "../components/FramerStacking";
import AboutBg from "../assets/people-smile.webp";
import NavMenu from "../components/NavMenu";
import PopupForm from "../components/PopupForm";

const Curriculam = () => {
  return (
    <>
     <PopupForm />
      <div
        className="abt-main w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavMenu />
        <h2 className="text-white text-4xl font-semibold pt-90 px-5">Curriculam</h2>
      </div>
      <NavMenu/>

      <FramerStacking />
     
    </>
  );
};

export default Curriculam;
