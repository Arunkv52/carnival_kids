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
          
        </div>
      </div>
      <div>
        <div className="slider-2 cursor-grab">
          
        </div>
      </div>
      <div>
        <div className="slider-3 cursor-grab">
           
        </div>
      </div>
    </Slider>
  );
}
