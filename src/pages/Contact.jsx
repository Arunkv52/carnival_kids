import React from "react";
import ContactBG from "../assets/14.jpg";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import PopupForm from "../components/PopupForm";

const Contact = () => {
  return (
    <>
      <PopupForm />
      <div
        className="abt-main w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${ContactBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavMenu />
        <h2 className="text-white text-4xl font-semibold pt-[500px] px-10">
          Contact
        </h2>
      </div>

      <div className="form-place md:px-20 px-5 py-20 md:flex justify-around">
        {/* Contact Info */}
        <div className="md:w-1/2">
          <h2 className="md:text-4xl text-2xl">
            At Carnival Kids Montessori, we don’t just prepare children for
            school – we prepare them for life!
          </h2>
          <ul className="py-10">
            <li className="md:text-[20px] text-[20px] md:py-1 py-1">
              <span className="font-semibold text-black/60">Mobile :</span> +91
              98402 22744
            </li>
            <li className="md:text-[20px] text-[20px] md:py-1 py-1">
              <span className="font-semibold text-black/60">Email :</span>{" "}
              vidhyatmt@gmail.com
            </li>
            <li className="md:text-[20px] text-[20px] md:py-1 py-1">
              <span className="font-semibold text-black/60">Address :</span> No
              9, Rajalakshmi Nagar, Subramaniam palayam, <br /> GN Mills,
              Coimbatore – 641029
            </li>
          </ul>
        </div>
        {/* Contact Form */}
        <div className="md:w-1/2">
          <form action="" className="px-10 py-0 rounded-2xl">
            <div className="py-2">
              <label htmlFor="name" className="text-white"></label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter parent name"
                required
                className="bg-black w-full py-2 px-3 text-white border-0 outline-0"
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
                className="bg-black w-full py-2 px-3 text-white border-0 outline-0"
              />
            </div>
            <div className="py-2">
              <select
                name="enquiry"
                id=""
                className="bg-black w-full py-2 px-3 text-white border-0 outline-0"
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
                className="bg-black w-full py-2 px-3 text-white border-0 outline-0"
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
                className="bg-black w-full py-2 px-3 text-white border-0 outline-0"
              />
            </div>

            <div className="py-2">
              <label htmlFor="text" className="text-white"></label>
              <select
                name="grade"
                id=""
                className="bg-black w-full py-2 px-3 text-white border-0 outline-0"
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
                className="bg-black w-full py-2 px-3 text-white border-0 outline-0"
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
                className="bg-red-600 border-none text-white font-bold px-8 py-3 hover:bg-black hover:text-white hover:cursor-pointer w-1/2"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Embedded Map */}
      <div className="md:w-full md:px-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6647093664506!2d76.9354615!3d11.0637452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f61be0a53b27%3A0x1787c85597f4d28e!2sCarnival%20Kids!5e0!3m2!1sen!2sus!4v1756730835115!5m2!1sen!2sus"
          className="w-full h-1/2 object-cover"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
