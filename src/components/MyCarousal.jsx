import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Fisherman from "../assets/cartoon/close-up.jpg";
import Img01 from '../assets/knowldge.jpg'
import Img02 from '../assets/Learning.jpg'
import Img03 from '../assets/Education.jpg'



const MyCarousal = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Fisherman} alt="" />
              <div className="pt-5 pb-20 px-10">
                <h2 className="text-2xl font-semibold pt-2 pb-2 text-blue-400 ">
                  Learn
                </h2>
                <p className="text-[18px]">
                  Children learn through hands-on experiences that spark
                  curiosity and creativity.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Img01} alt="" />
              <div className="pt-5  pb-20 px-10">
                <h2 className="text-2xl font-semibold pt-2 pb-2 text-blue-400">
                  Discovery
                </h2>
                <p className="text-[20px]">
                  Books open the door to endless knowledge, inspiring young
                  minds to explore and imagine.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Img02} alt="" />
              <div className="pt-5  pb-20 px-10">
                <h2 className="text-2xl font-semibold pt-2 pb-2 text-blue-400">
                 Education
                </h2>
                <p className="text-[20px]">
                  Through study and discovery, children build a strong
                  foundation for lifelong learning
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Img03} alt="" />
              <div className="pt-5  pb-20 px-10">
                <h2 className="text-2xl font-semibold pt-2 pb-2 text-blue-400">
                  Knowledge
                </h2>
                <p className="text-[20px]">
                  Knowledge grows when children explore, discover, and connect
                  ideas on their own.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious
          className={
            "Carousal-prev bg-[#54b1e3] p-[15px] w-[50px] h-[50px] text-white hidden md:block absolute left-[92%] top-[100%]"
          }
        />
        <CarouselNext
          className={
            "Carousal-next bg-[#54b1e3] p-[15px] w-[50px] h-[50px] text-white hidden md:block absolute right-0 top-[100%]"
          }
        />
      </Carousel>
    </>
  );
};

export default MyCarousal;
