import React from "react";
import NavMenu from "../components/NavMenu";
import ScrollStack from "../components/scrollStack";
import AboutBg from "../assets/people-smile.webp";
import PopupForm from "../components/PopupForm";

const Services = () => {
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
        <h2 className="text-white text-4xl font-semibold pt-90 px-5">
          Services
        </h2>
      </div>
      <NavMenu />
      <ScrollStack />
    </>
  );
};

export default Services;
