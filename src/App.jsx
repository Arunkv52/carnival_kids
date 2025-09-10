import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Curriculam from "./pages/Curriculam";
import Blog from "./pages/Blog";
import WhyMontessori from "./components/blog/WhyMontessori";

const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/curriculum" element={<Curriculam/>}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/whymontessori" element={<WhyMontessori />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
