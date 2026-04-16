import React, { useRef, useEffect } from "react";
import ImagesElements from "../ImagesElements.js";
import Images from "./Images.jsx";



export default function Gallery() {
  
    const galleryElements = ImagesElements.map((element) => {
        return (
            <Images
                key={element.id} 
                mobile={element.mobile}
                desktop={element.desktop}
                imageAlt={element.imageAlt}
                title={element.title}
            />
        );
    });

  return (
    <section className="gallery">
        <h1 className="title__gallery">Our Creations</h1>
        <div className="container gallery__container">
          
                {galleryElements}
           
        </div>
        <button className="gallery__button">See All</button>
    </section>
  );
}