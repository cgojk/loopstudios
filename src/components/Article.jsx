import React, { useRef, useEffect } from "react";

import image from "../images/mobile/image-interactive.jpg";

export default function Article() {
  

  return (
   
  

    <section className="container article__container sm__container">
        <div className="article__content">
            <div className="image__article">
                 <img src={image} alt="interactive" className="article__image"/>
              </div>
              <div className="article__description__container">
                  <h2 className="article__title">The leader in interactive VR </h2>
                  <p className="article__description"> Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.</p>
              </div>
      </div>
         
    </section>
   
  );
}