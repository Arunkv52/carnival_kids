import React from "react";
import FramerStacking from "../components/FramerStacking";
import AboutBg from "../assets/14.jpg";
import NavMenu from "../components/NavMenu";
import PopupForm from "../components/PopupForm";
import Img5 from '../assets/4.webp'
import Footer from "../components/Footer";
import Img1 from '../assets/4.webp'
import Img2 from '../assets/6.webp'
import Img3 from '../assets/DSC00222.webp'
import Img4 from '../assets/9.webp'


const Curriculam = () => {
  return (
    <>
      <PopupForm />
      <div
        className="abt-main w-full md:py-0"
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavMenu />
        <h2 className="text-white text-6xl font-semibold pt-[500px] px-10 ">
          curriculum
        </h2>
      </div>


      <div className="md:flex justify-around items-start gap-5 md:px-20 px-5 py-20">
        <h3 className="md:text-5xl text-5xl pb-5">
          Why Choose <span className="text-[#51A2FF] font-semibold">Montessori Education?</span>
        </h3>
        <div>
          <ul className="text-[20px]">
            <li>✦ <strong>Individualized Learning </strong> – Children progress at their own pace with
              guidance from Montessori-trained educators.</li>
            <li>✦ <strong>Hands-On Exploration</strong> – Purposeful materials encourage discovery, problem-solving, and critical thinking.</li>
            <li>✦ <strong>Independence & Confidence</strong> – Students develop self-motivation, responsibility, and respect for others.</li>
            <li>✦<strong> Whole-Child Development</strong> – Supporting academic, emotional, and social growth in a joyful setting.</li>
          </ul>
        </div>
      </div>

      <div className="px-5 bg-[#fcf9f3] py-20">
        <div className="cur-one md:flex justify-start items-start gap-2 rounded-2xl bg-[#ebf9fb] my-10 md:mx-18 mx-0">
          <div className="md:w-1/2 w-full">
            <img src={Img1} alt="" className="rounded-[20px]" />
          </div>
          <div className="md:px-20 px-5 py-10 md:w-1/2 w-full">
            <h2 className="text-[18px] font-semibold py-2 text-black bg-[#ebe7de] rounded-[50px] w-fit px-5">Practical Life</h2>
            <br />
            <hr />
            <p className="text-base text-black/80 px-0 py-5">Children are naturally interested in activities that are done in the day to day living like sweeping, mopping or washing clothes etc. The activities of Practical Life are to help the child gain control and coordination of his movement, help the child to gain independence and thereby adapt to his society. The Practical Life Area has materials that help children to acquire these skills. For example, the various “dressing frames” help toddlers learn to button, zip, and even tie a shoe lace. There are activities like washing hands, washing clothes which are activities of our daily life. Children are offered grace and courtesy activities in groups which help them adapt to the society.
            </p>
          </div>
        </div>
        <div className="cur-one md:flex justify-start items-start gap-2 rounded-2xl bg-[#f1effe] my-10 md:mx-18 mx-0">
          <div className="md:px-20 px-5 py-10 md:w-1/2 w-full">
            <h2 className="text-[18px] font-semibold py-2 text-black bg-[#ebe7de] rounded-[50px] w-fit px-5">Sensorial</h2>
            <br />
            <hr />
            <p className="text-base text-black/80 px-0 py-5">Senses play a vital role in gathering information to function in the environment. The young child collects all information that he needs, through his senses. The child must refine his senses in his first six years of life. For this the child must have opportunity for refinement. The Montessori environment has materials that help children refine their visual, auditory, tactile, taste, hearing sense etc.

            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={Img3} alt="" className="rounded-[20px]" />
          </div>
        </div>
        <div className="cur-one md:flex justify-start items-start gap-2 rounded-2xl bg-[#fdedef] my-10 md:mx-18 mx-0">
          <div className="md:w-1/2 w-full">
            <img src={Img2} alt="" className="rounded-[20px]" />
          </div>
          <div className="md:px-20 px-5 py-10 md:w-1/2 w-full">
            <h2 className="text-[18px] font-semibold py-2 text-black bg-[#ebe7de] rounded-[50px] w-fit px-5">Language
            </h2>
            <br />
            <hr />
            <p className="text-base text-black/80 px-0 py-5">The environment is filled with opportunities to build language. There's a variety of books in the reading corner, and children are exposed to different word sounds and a rich vocabulary. Young children first spontaneously develop speech. Later, between the ages of 2.5 and 4.5, if they are in the right environment, writing will also emerge naturally, followed by reading. Beyond language, the Montessori method is designed to help children build self-esteem, solve problems with confidence, and develop self-control. It supports the child's overall development, helping them believe in themselves and become independent, well-adjusted individuals.

            </p>
          </div>
        </div>
        <div className="cur-one md:flex justify-start items-start gap-2 rounded-2xl bg-[#ebf9fb] my-10 md:mx-18 mx-0">
          <div className="md:px-20 px-5 py-10 md:w-1/2 w-full">
            <h2 className="text-[18px] font-semibold py-2 text-black bg-[#ebe7de] rounded-[50px] w-fit px-5">Mathematics</h2>
            <br />
            <hr />
            <p className="text-base text-black/80 px-0 py-5">Our daily life is filled with calculation, precision and exactness. We prepare the children through sensorial and practical life activities before introducing them to math concepts. In the Montessori environment starting right from the recognition of numbers, counting they go beyond like the arithmetic operations addition, subtraction, multiplication and division.

            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <img src={Img4} alt="" className="rounded-[20px]" />
          </div>
        </div>

      </div>

     <Footer/>
    </>
  );
};

export default Curriculam;
