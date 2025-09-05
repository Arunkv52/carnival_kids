import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Fisherman from "../assets/cartoon/fisherman.jpg";
import Book from "../assets/cartoon/books.jpg";
import Study from "../assets/cartoon/Study.jpg";
import StudyBook from "../assets/cartoon/Suceed.jpg";

const MyCarousal = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Fisherman} alt="" />
              <div className="pt-5  pb-20 px-10 text-center">
                <h2 className="text-4xl font-semibold pt-2 pb-2 text-black font-[Delicious_Handrawn]">
                  Learn
                </h2>
                <p className="text-[18px]  font-[cursive]">
                  Children learn through hands-on experiences that spark
                  curiosity and creativity.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Book} alt="" />
              <div className="pt-5  pb-20 px-10 text-center">
                <h2 className="text-4xl font-semibold pt-2 pb-2 text-black font-[Delicious_Handrawn]">
                  Discovery
                </h2>
                <p className="text-[18px]  font-[cursive]">
                  Books open the door to endless knowledge, inspiring young
                  minds to explore and imagine.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={Study} alt="" />
              <div className="pt-5  pb-20 px-10 text-center">
                <h2 className="text-4xl font-semibold pt-2 pb-2 text-black font-[Delicious_Handrawn]">
                 Education
                </h2>
                <p className="text-[18px]  font-[cursive]">
                  Through study and discovery, children build a strong
                  foundation for lifelong learning
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/3">
            <div>
              <img src={StudyBook} alt="" />
              <div className="pt-5  pb-20 px-10 text-center">
                <h2 className="text-4xl font-semibold pt-2 pb-2 text-black font-[Delicious_Handrawn]">
                  Knowledge
                </h2>
                <p className="text-[18px]  font-[cursive]">
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
