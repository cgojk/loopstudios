import React, { useRef, useEffect } from "react";

import Navigation from "./Navigation.jsx";

export default function HeroSection() {
  

  return (
    <header className="hero ">
      <Navigation/>

      <div className="container hero__container sm__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Immersive experiences that deliver

          </h1>
        </div>
         
      </div>
    </header>
  );
}