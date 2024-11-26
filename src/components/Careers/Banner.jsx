import React from "react";
import Background from "../../assets/Banner Background.png";
import Downline from "../../assets/Banner Down Line.png";
import Leftline from "../../assets/Banner Left Line.png";
import Rightline from "../../assets/Banner Right Line.png";

function Banner() {
  return (
    <div className="secondary-banner">
      <img src={Background} className="background" />
      <h1>
        Join Our
        <br /> <span> Team</span>
      </h1>
      <img src={Downline} className="banner-down-line1" />
      <img src={Downline} className="banner-down-line2" />
      <img src={Leftline} className="banner-left-line" />
      <img src={Rightline} className="banner-right-line" />
    </div>
  );
}

export default Banner;
