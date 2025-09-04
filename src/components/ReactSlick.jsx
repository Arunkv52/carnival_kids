import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReactSlick.css";


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="slider-1 cursor-grab">
          <div className="slider-txt relative top-[65%] left-8">
           
            <p className="text-black py-1 px-3 rounded-2xl bg-[#fef854] font-[Delicious_Handrawn] w-fit">
              Welcome to
            </p>
            <h6 className="text-white md:text-7xl text-4xl py-2 font-semibold font-[Delicious_Handrawn]">
              Explore, Learn, Grow <br />The Montessori Way
            </h6>
          </div>
        </div>
      </div>
      <div>
        <div className="slider-2 cursor-grab">
          <div className="slider-txt relative top-[65%] left-8">
           
            <p className="text-black py-1 px-3 rounded-2xl bg-[#fef854] font-[Delicious_Handrawn] w-fit">
              Welcome to
            </p>
            <h6 className="text-white md:text-7xl text-4xl py-2 font-semibold font-[Delicious_Handrawn]">
              Explore, Learn, Grow <br />The Montessori Way
            </h6>
          </div>
        </div>
      </div>
      <div>
        <div className="slider-3 cursor-grab">
           <div className="slider-txt relative top-[65%] left-8">
           
            <p className="text-black py-1 px-3 rounded-2xl bg-[#fef854] font-[Delicious_Handrawn] w-fit">
              Welcome to
            </p>
            <h6 className="text-white md:text-7xl text-4xl py-2 font-semibold font-[Delicious_Handrawn]">
              Explore, Learn, Grow <br />The Montessori Way
            </h6>
          </div>
        </div>
      </div>
    </Slider>
  );
}
