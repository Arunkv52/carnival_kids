import React from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import AboutBg from "../assets/14.jpg";
import PopupForm from "../components/PopupForm";
import  LightboxGallery from '../components/LightboxGallery'


const Gallery = () => {
  return (
    <>
      <PopupForm />
      <NavMenu />
      <div
        className="abt-main w-full"
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavMenu />
        <h2 className="text-white text-6xl font-semibold pt-[500px] px-10">
          Gallery
        </h2>
      </div>
      <div className="max-w-full md:px-30 px-0 py-20">
        <LightboxGallery />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
