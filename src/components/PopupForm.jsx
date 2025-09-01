import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

const PopupForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="bg-red-600 w-fit p-4 rounded-[50px] text-white fixed bottom-5 z-10 left-2 cursor-pointer shadow-2xl"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FaMessage className="text-2xl" />
      </div>
      <div className="some-msg fixed bottom-25 z-10 left-5">
        {open && (
          <div className="bg-red-600 h-auto">
            <form action="" className="px-10 py-10 rounded-2xl">
              <div className=" flex justify-end" onClick={() => {
                    setOpen(!open);
                  }}>
                <IoIosCloseCircle className="text-2xl hover:opacity-50 hover:cursor-pointer text-white" />
              </div>

              <h1 className="text-left text-4xl text-white font-semibold py-2">
                Admission Enquiry <br /> Form | 2026-27
              </h1>
              <p className="text-white">
                Leave your message and we'll get back to you shortly.
              </p>
              <div className="py-2">
                <label htmlFor="name" className="text-white">
                  Name **
                </label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter your name"
                  required
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                />
              </div>
              <div className="py-2">
                <label htmlFor="email" className="text-white">
                  Email id **
                </label>
                <input
                  type="email"
                  name="name"
                  id=""
                  placeholder="Enter your email"
                  required
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                />
              </div>

              <div className="py-2">
                <label htmlFor="text" className="text-white">
                  Grade **
                </label>
                <select
                  name="grade"
                  id=""
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                  required
                >
                  <option value="" selected>
                    Select Grade
                  </option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade4">Grade 4</option>
                  <option value="grade5">Grade 5</option>
                </select>
              </div>
              <div className="py-4">
                <button
                  type="submit"
                  className="bg-black border-none text-white font-bold px-8 py-3 hover:bg-white hover:text-black hover:cursor-pointer"
                 
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default PopupForm;
