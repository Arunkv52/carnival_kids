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
          <div className="slider-txt relative top-1/2 left-5">
            <p className="text-white text-2xl">Welcome to</p>
            <h6 className="text-white md:text-5xl text-4xl py-2 font-semibold">
              Educating Today's Learners For <br /> Tomorrow's World!
            </h6>
          </div>
        </div>
      </div>
      <div>
        <div className="slider-2">
           <div className="slider-txt relative top-1/2 left-5">
            <p className="text-white text-2xl">Welcome to</p>
            <h6 className="text-white md:text-5xl text-4xl py-2 font-semibold">
              Educating Today's Learners For <br /> Tomorrow's World!
            </h6>
          </div>
        </div>
      </div>
      <div>
        <div className="slider-3">
           <div className="slider-txt relative top-1/2 left-5">
            <p className="text-white text-2xl">Welcome to</p>
            <h6 className="text-white md:text-5xl text-4xl py-2 font-semibold">
              Educating Today's Learners For <br /> Tomorrow's World!
            </h6>
          </div>
        </div>
      </div>
    </Slider>
  );
}
