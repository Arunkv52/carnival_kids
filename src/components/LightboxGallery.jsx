import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// Image import 
import Img0 from "../assets/DSC00181.webp";
import Img1 from "../assets/1.webp";
import Img2 from "../assets/2.webp";
import Img3 from "../assets/3.webp";
import Img4 from "../assets/4.webp";
import Img5 from "../assets/5.webp";
import Img6 from "../assets/6.webp";
import Img7 from "../assets/7.webp";
import Img8 from "../assets/8.webp";
import Img9 from "../assets/9.webp";


// Import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]} // ✅ keep this for Swiper v9+
      className="mySwiper"
    >
      <SwiperSlide>
        <div>
          <img src={Img0} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={Img1} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={Img2} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={Img3} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={Img4} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={Img5} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={Img6} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={Img7} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={Img8} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div>
          <img src={Img9} alt="slide 1" className="w-full h-auto md:h-dvh object-contain"/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
