import React, { useCallback, useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";

// Plugins
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Styles (important for lightGallery to work)
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import '../components/LightboxGallery.css'

// image import
import Img0 from "../assets/DSC00181.webp";
import Img1 from "../assets/1.webp";
import Img2 from "../assets/2.webp";
import Img3 from "../assets/3.webp";
import Img4 from "../assets/4.webp";
import Img5 from "../assets/5.webp";
import Img6 from "../assets/6.webp";
import Img7 from "../assets/7.webp";
import Img8 from "../assets/8.webp";
import Img9 from "../assets/9.webp";

export default function App() {
  const lightGalleryRef = useRef(null);
  const containerRef = useRef(null);
  const [galleryContainer, setGalleryContainer] = useState(null);

  const onInit = useCallback((detail) => {
    if (detail && detail.instance) {
      lightGalleryRef.current = detail.instance;
      lightGalleryRef.current.openGallery(); // auto-open gallery
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer(containerRef.current);
    }
  }, []);

  return (
    <div className="App bg-red-700">
      <div style={{ height: "800px" }} ref={containerRef}></div>

      <LightGallery
        container={galleryContainer}
        onInit={onInit}
        plugins={[lgZoom, lgThumbnail]}
        dynamic={true}
        dynamicEl={[
          {
            src: Img0,
            responsive: Img0,
            thumb: Img0,
          },
          {
            src: Img1,
            responsive: Img1,
            thumb: Img1,
          },
          {
            src: Img2,
            responsive: Img2,
            thumb: Img2,
          },
          {
            src: Img3,
            responsive: Img3,
            thumb: Img3,
          },
          {
            src: Img4,
            responsive: Img4,
            thumb: Img4,
          },
          {
            src: Img5,
            responsive: Img5,
            thumb: Img5,
          },
          {
            src: Img6,
            responsive: Img6,
            thumb: Img6,
          },
          {
            src: Img7,
            responsive: Img7,
            thumb: Img7,
          },
          {
            src: Img8,
            responsive: Img8,
            thumb: Img8,
          },
          {
            src: Img9,
            responsive: Img9,
            thumb: Img9,
          },
          
        ]}
      />
    </div>
  );
}
