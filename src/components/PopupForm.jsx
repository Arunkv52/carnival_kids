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
      <div className="some-msg fixed md:bottom-3 bottom-10 z-10 md:left-20 left-15">
        {open && (
          <div className="bg-red-600 h-auto">
            <form action="" className="md:px-10 px-8 md:py-4 py-2 rounded-2xl">
              <div
                className=" flex justify-end"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <IoIosCloseCircle className="text-2xl hover:opacity-50 hover:cursor-pointer text-white" />
              </div>

              <h1 className="text-left md:text-4xl text-[20px] text-white font-semibold py-2">
                Block your child seat of <br /> Carnival Kids
              </h1>

              <div className="py-2">
                <label htmlFor="name" className="text-white"></label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter parent name"
                  required
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                />
              </div>
              <div className="py-2">
                <label htmlFor="name" className="text-white"></label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter child name"
                  required
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                />
              </div>
              <div className="py-2">
                <select
                  name="enquiry"
                  id=""
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                  required
                >
                  <option value="" selected>
                    Enquiry for son / daughter
                  </option>
                  <option value="son">Son</option>
                  <option value="daughter">Daughter</option>
                </select>
              </div>

              <div className="py-2">
                <label htmlFor="tel" className="text-white"></label>
                <input
                  type="tel"
                  name="name"
                  id=""
                  placeholder="Enter phone number"
                  required
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                />
              </div>
              <div className="py-2">
                <label htmlFor="email" className="text-white"></label>
                <input
                  type="email"
                  name="name"
                  id=""
                  placeholder="Enter email address"
                  required
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                />
              </div>

              <div className="py-2">
                <label htmlFor="text" className="text-white"></label>
                <select
                  name="grade"
                  id=""
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                  required
                >
                  <option value="" selected>
                    Select Child Age
                  </option>
                  <option value="Age0">Age 1 to 2</option>
                  <option value="Age1">Age 2 to 3</option>
                  <option value="Age2">Age 3 to 4</option>
                  <option value="Age3">Age 4 to 5</option>
                  <option value="Age4">Above 5</option>
                </select>
              </div>
              <div className="py-2">
                <label htmlFor="text" className="text-white"></label>
                <select
                  name="grade"
                  id=""
                  className="bg-gray-700 w-full py-2 px-3 text-white border-0 outline-0"
                  required
                >
                  <option value="" selected>
                    Select Centre
                  </option>
                  <option value="Coimbatore">Coimbatore</option>
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
