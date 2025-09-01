import React from "react";
import ContactBG from "../assets/campus-school.jpeg";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div
        className="abt-main w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${ContactBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavMenu />
        <h2 className="text-white text-4xl font-semibold pt-90 px-5">
          Contact
        </h2>
      </div>

      <div className="form-place md:px-20 py-20 md:flex justify-around">
        {/* Contact Info */}
        <div className="md:w-1/2">
          <h2 className="text-4xl">
            Do you have a question about your Student Support Services? Would
            you like to speak to our Admissions Team? Or, are you from the media
            and wish to reach out to our Press Office? You can find all the
            contact details for our staff and departments across the University
            here.
          </h2>
          <ul className="py-10">
            <li className="text-2xl">
              <span className="font-semibold text-black/60">Mobile :</span> +91
              98402 22744
            </li>
            <li className="text-2xl">
              <span className="font-semibold text-black/60">Email :</span>{" "}
              vidhyatmt@gmail.com
            </li>
            <li className="text-2xl">
              <span className="font-semibold text-black/60">Address :</span> No
              9, Rajalakshmi Nagar, Subramaniam palayam, <br /> GN Mills,
              Coimbatore – 641029
            </li>
          </ul>
        </div>
        {/* Contact Form */}
        <div className="md:w-1/2">
          <form>
            <div className="name py-5">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="py-4 px-2 bg-gray-600 text-white w-full"
              />
            </div>
            <div className="pwd py-5">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="py-4 px-2 bg-gray-600 text-white w-full"
              />
            </div>
            <div className="grade py-4">
              <select
                name="grade"
                className="bg-gray-600 py-4 px-3 w-full text-white"
              >
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
              </select>
            </div>
            <div className="btn-submit bg-red-600 text-white py-3 px-5">
              <button type="submit" className="font-semibold text-center">
                Submit
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
