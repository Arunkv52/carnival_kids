import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Smile1 from "../assets/DSC00222.jpg";
import Smile2 from "../assets/DSC00227.jpg";
import Smile3 from "../assets/DSC00243.jpg";
import Smile4 from "../assets/DSC00233.jpg";
import Smile5 from "../assets/DSC00196.jpg";

const MyCarousal = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Smile1} alt="" />
              <h2 className="text-2xl font-semibold pt-10 pb-2 text-[#0c1637]">
                Learn
              </h2>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Smile5} alt="" />
              <h2 className="text-2xl font-semibold pt-10 pb-2 text-[#0c1637]">
                Dining
              </h2>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Smile3} alt="" />
              <h2 className="text-2xl font-semibold pt-10 pb-2 text-[#0c1637]">
                Games
              </h2>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Smile4} alt="" />
              <h2 className="text-2xl font-semibold pt-10 pb-2 text-[#0c1637]">
                Meditation
              </h2>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious
          className={
            "Carousal-prev bg-red-600 p-[15px] w-[50px] h-[50px] text-white hidden md:block absolute left-[93%] -top-[16%]"
          }
        />
        <CarouselNext
          className={
            "Carousal-next bg-red-600 p-[15px] w-[50px] h-[50px] text-white hidden md:block absolute right-0 -top-[16%]"
          }
        />
      </Carousel>
    </>
  );
};

export default MyCarousal;
