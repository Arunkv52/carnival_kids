import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Smile from "../assets/girlyy.jpg";


const MyCarousal = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/4">
            <div>
              <img src={Smile} alt=""/>
              <h2 className="text-2xl font-semibold pt-10 pb-2 text-[#0c1637]">
                Annual days
              </h2>
              <p className="text-[18px] text-black/80">
                Develop or strengthen your management skills, making a decisive
                contribution to your organization's excellent performance.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/4">
            <div>
              <img src={Smile} alt=""/>
              <h2 className="text-2xl font-semibold pt-10 pb-2 text-[#0c1637]">
                Annual days
              </h2>
              <p className="text-[18px] text-black/80">
                Develop or strengthen your management skills, making a decisive
                contribution to your organization's excellent performance.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/4">
            <div>
              <img src={Smile} alt=""/>
              <h2 className="text-2xl font-semibold pt-10 pb-2 text-[#0c1637]">
                Sports days
              </h2>
              <p className="text-[18px] text-black/80">
                Develop or strengthen your management skills, making a decisive
                contribution to your organization's excellent performance.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/4">
            <div>
              <img src={Smile} alt=""/>
              <h2 className="text-2xl font-semibold pt-10 pb-2 text-[#0c1637]">
                Annual days
              </h2>
              <p className="text-[18px] text-black/80">
                Develop or strengthen your management skills, making a decisive
                contribution to your organization's excellent performance.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/4">
            <div>
              <img src={Smile} alt=""/>
              <h2 className="text-2xl font-semibold pt-10 pb-2 text-[#0c1637]">
                Annual days
              </h2>
              <p className="text-[18px] text-black/80">
                Develop or strengthen your management skills, making a decisive
                contribution to your organization's excellent performance.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className={'Carousal-prev hidden md:block absolute left-[95%] -top-[16%]'}/>
        <CarouselNext className={'Carousal-next hidden md:block absolute right-0 -top-[16%]'}/>
      </Carousel>
    </>
  );
};

export default MyCarousal;
