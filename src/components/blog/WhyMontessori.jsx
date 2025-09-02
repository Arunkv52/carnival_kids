import React from "react";
import NavMenu from "../NavMenu";
import Footer from "../Footer";
import AboutBg from "../../assets/15.jpg";

const WhyMontessori = () => {
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
          Blog
        </h2>
      </div>

      <div>
        <h1>Blog is empty</h1>
      </div>

      <Footer />
    </>
  );
};

export default WhyMontessori;
