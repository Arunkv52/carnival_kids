import React from "react";
import NavMenu from "../components/NavMenu";
import AboutBg from "../assets/15.jpg";
import PopupForm from "../components/PopupForm";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Blog = () => {
  return (
    <>
      <PopupForm />
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
          Blog
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-10 px-10">
        <div>
          <img src={AboutBg} alt="" className="w-full h-auto" />
          <h6 className="text-2xl font-bold pt-3">
            Why Montessori Education is the Best Start for Your Child
          </h6>
          <p className="text-[18px] py-2 text-black/70">
            Every child is born with natural curiosity and the ability to learn
          </p>
          <p className="text-blue-900 underline cursor-pointer py-3 font-bold">
            <Link to={"/whymontessori"}>Learn more</Link>
          </p>
        </div>
        <div>
          <img src={AboutBg} alt="" className="w-full h-auto" />
          <h6 className="text-2xl font-bold pt-3">
            Why Montessori Education is the Best Start for Your Child
          </h6>
          <p className="text-[18px] py-2 text-black/70">
            Every child is born with natural curiosity and the ability to learn
          </p>
          <p className="text-blue-900 underline cursor-pointer py-3 font-bold">
            <Link to={"/whymontessori"}>Learn more</Link>
          </p>
        </div>
        <div>
          <img src={AboutBg} alt="" className="w-full h-auto" />
          <h6 className="text-2xl font-bold pt-3">
            Why Montessori Education is the Best Start for Your Child
          </h6>
          <p className="text-[18px] py-2 text-black/70">
            Every child is born with natural curiosity and the ability to learn
          </p>
          <p className="text-blue-900 underline cursor-pointer py-3 font-bold">
            <Link to={"/whymontessori"}>Learn more</Link>
          </p>
        </div>
        <div>
          <img src={AboutBg} alt="" className="w-full h-auto" />
          <h6 className="text-2xl font-bold pt-3">
            Why Montessori Education is the Best Start for Your Child
          </h6>
          <p className="text-[18px] py-2 text-black/70">
            Every child is born with natural curiosity and the ability to learn
          </p>
          <p className="text-blue-900 underline cursor-pointer py-3 font-bold">
            <Link to={"/whymontessori"}>Learn more</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
