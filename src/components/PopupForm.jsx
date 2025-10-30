import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

const PopupForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="bg-[#54b1e3] w-fit p-4 rounded-[50px] text-white fixed bottom-5 z-10 left-2 cursor-pointer shadow-2xl"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FaMessage className="text-2xl" />
      </div>
      <div className="some-msg fixed md:w-1/3 w-full md:bottom-5 bottom-0 z-10 md:left-20 left-0">
        {open && (
          <div className="bg-[#0f2734]  h-auto">
            <form onSubmit={handleSubmit} className="md:px-10 px-0 py-0 rounded-2xl">
              <div className="py-2">
                <label htmlFor="parentName" className="text-white"></label>
                <input
                  type="text"
                  name="parentName"
                  id=""
                  placeholder="Enter parent name"
                  required
                  onChange={handleChange}
                  className="bg-[#f1f1f1] w-full md:py-2 py-4 px-3 text-black border-0 outline-0"
                />
              </div>
              <div className="py-2">
                <label htmlFor="childName" className="text-white"></label>
                <input
                  type="text"
                  name="childName"
                  id=""
                  placeholder="Enter child name"
                  required
                  onChange={handleChange}
                  className="bg-[#f1f1f1] w-full md:py-2 py-4 px-3 text-black border-0 outline-0"
                />
              </div>
              <div className="py-2">
                <select
                  name="enquiry"
                  id=""
                  className="bg-[#f1f1f1] w-full md:py-2 py-4 px-3 text-black border-0 outline-0"
                  required
                  onChange={handleChange}
                >
                  <option value="" selected>
                    Enquiry for son / daughter
                  </option>
                  <option value="son">Son</option>
                  <option value="daughter">Daughter</option>
                </select>
              </div>
              <div className="py-2">
                <label htmlFor="dob" className="text-white"></label>
                <input type="date" name="dob" id="" placeholder="Select date of birth"
                  required
                  onChange={handleChange}
                  className="bg-[#f1f1f1] w-full md:py-2 py-4 px-3 text-black border-0 outline-0" />
              </div>


              <div className="py-2">
                <label htmlFor="phone" className="text-white"></label>
                <input
                  type="tel"
                  name="phone"
                  id=""
                  placeholder="Enter phone number"
                  required
                  onChange={handleChange}
                  className="bg-[#f1f1f1] w-full md:py-2 py-4 px-3 text-black border-0 outline-0"
                />
              </div>
              <div className="py-2">
                <label htmlFor="altPhone" className="text-white"></label>
                <input
                  type="tel"
                  name="altPhone"
                  id=""
                  placeholder="Alternative phone number"
                  required
                  onChange={handleChange}
                  className="bg-[#f1f1f1] w-full md:py-2 py-4 px-3 text-black border-0 outline-0"
                />
              </div>
              <div className="py-2">
                <label htmlFor="email" className="text-white"></label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter email address"
                  required
                  onChange={handleChange}
                  className="bg-[#f1f1f1] w-full md:py-2 py-4 px-3 text-black border-0 outline-0"
                />
              </div>

              <div className="py-2">
                <label htmlFor="age" className="text-white"></label>
                <select
                  name="age"
                  id="age"
                  className="bg-[#f1f1f1] w-full md:py-2 py-4 px-3 text-black border-0 outline-0"
                  required
                  onChange={handleChange}
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
                <label htmlFor="branch" className="text-white"></label>
                <select
                  name="branch"
                  id=""
                  className="bg-[#f1f1f1] w-full md:py-2 py-4 px-3 text-black border-0 outline-0"
                  required
                  onChange={handleChange}
                >
                  <option value="" selected>
                    Select Branch
                  </option>
                  <option value="Coimbatore">Coimbatore</option>
                </select>
              </div>
              <div className="py-4">
                <button
                  type="submit"
                  className="bg-[#51a2ff] border-none text-white font-bold px-8 py-3 hover:bg-black hover:text-white hover:cursor-pointer w-1/2"
                >
                  Send Enquiry
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
