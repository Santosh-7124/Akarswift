import React from "react";
import Background from "../../assets/Services/Banner Background.png";
import ObjectImg from "../../assets/Services/Banner Object.png";

function Banner() {
  return (
    <div className="primary-banner">
      <img src={Background} className="primary-banner-background"></img>
      <img src={ObjectImg} className="primary-banner-object"></img>
      <h1>
        Services for <br /> <span> Seamless logistics</span>
      </h1>
    </div>
  );
}

export default Banner;
