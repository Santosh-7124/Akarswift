import React from "react";
import Background from "../../assets/Banner Background.png";
import Downline from "../../assets/Banner Down Line.png";
import Leftline from "../../assets/Banner Left Line.png";
import Rightline from "../../assets/Banner Right Line.png";
import MobileBackground from "../../assets/Mobile Banner Background.png";
import MobileDownline from "../../assets/Mobile Banner Down Line.png";
import MobileLeftline from "../../assets/Mobile Banner Left Line.png";
import MobileRightline from "../../assets/Mobile Banner Right Line.png";

function Banner() {
  return (
    <div className="secondary-banner">
      <img src={Background} className="background desktop" />
      <img src={MobileBackground} className="background mobile" />
      <h1>
        Join Our
        <br /> <span> Team</span>
      </h1>
      <img src={Downline} className="banner-down-line1 desktop" />
      <img src={Downline} className="banner-down-line2 desktop" />
      <img src={Leftline} className="banner-left-line desktop" />
      <img src={Rightline} className="banner-right-line desktop" />
      <img src={MobileDownline} className="banner-down-line1 mobile" />
      <img src={MobileDownline} className="banner-down-line2 mobile" />
      <img src={MobileLeftline} className="banner-left-line mobile" />
      <img src={MobileRightline} className="banner-right-line mobile" />
    </div>
  );
}

export default Banner;
