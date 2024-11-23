import React from "react";
import Background from "../../assets/Products/Banner Background.png";
import ObjectImg from "../../assets/Products/Banner Ship.png";

function Banner() {
  return (
    <div className="primary-banner">
      <img src={Background} className="primary-banner-background"></img>
      <img src={ObjectImg} className="primary-banner-object"></img>
      <h1>
        Your Partner in <br /> <span> Diverse Imports</span>
      </h1>
    </div>
  );
}

export default Banner;
