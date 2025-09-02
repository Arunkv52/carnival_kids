import React from "react";
import DomeGallery from "../components/DemoGallery";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import AboutBg from "../assets/14.jpg";
import PopupForm from "../components/PopupForm";


const Gallery = () => {
  return (
    <>
    <PopupForm/>
      <NavMenu />
      <div
        className="abt-main w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavMenu />
        <h2 className="text-white text-4xl font-semibold pt-[500px] px-10">Gallery</h2>
      </div>
      <div className="max-w-full" style={{ width: "100dvw", height: "100vh" }}>
        <DomeGallery />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
