import React, { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // ✅ import autoplay plugin
import Carousal_1 from "../assets/students.jpg";
import Carousal_2 from "../assets/preschool.jpg";
import Carousal_3 from "../assets/smiley.jpg";
import NavMenu from "./NavMenu";

const Header = () => {
  // create autoplay plugin
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // 3s auto-scroll
  );

  return (
    <header>
      <Carousel
        plugins={[autoplay.current]} // pass plugin
        className="-z-1 hover:cursor-grab"
        opts={{
          loop: true, // infinite loop
        }}
      >
        <CarouselContent className="max-h-dvh hover:cursor-grab">
          <CarouselItem>
            <img src={Carousal_1} alt="slide1"/>
          </CarouselItem>
          <CarouselItem>
            <img src={Carousal_2} alt="slide2" />
          </CarouselItem>
          <CarouselItem>
            <img src={Carousal_3} alt="slide3" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <NavMenu className="w-full" />
    </header>
  );
};

export default Header;
