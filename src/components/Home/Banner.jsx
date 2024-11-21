import React from "react";
import BannerEllipseTop from "../../assets/Home/Banner Ellipse Top.png";
import BannerEllipseBottom from "../../assets/Home/Banner Ellipse Bottm.png";
import BannerGlobe from "../../assets/Home/Banner Globe.png";
import OrangeButton from "../Buttons/OrangeButton";
import TrasnparentButton from "../Buttons/TransparentButton";

function Banner() {
  return (
    <div className="home-banner">
      <div className="home-banner-heading">
        <div className="home-banner-heading-container">
          <h1>
            Across the Globe with <br /> <span>Akarswift Global</span>
          </h1>
          <p>
            We connect continents and cluture by importing and exporting diverse
            goods worldwide. With a focus on excellence, innovation, and
            sustainability, we deliver exceptional value to our partners and
            clients. Discover a borderless world with Akarswift Global.
          </p>
          <div className="home-banner-buttons">
            <OrangeButton name="Contact Us" link="/contact" />
            <TrasnparentButton name="Explore " link="/about" />
          </div>
          <img src={BannerEllipseTop} className="banner-ellipse-1" />
          <img src={BannerEllipseBottom} className="banner-ellipse-2" />
        </div>
      </div>
      <div className="home-banner-globe">
        <img src={BannerGlobe} id="banner-globe" />
        <div id="globe-background">
          <div id="globe-background-color"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
