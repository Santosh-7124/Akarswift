import React from "react";
import TransparentButton from "../Buttons/TransparentButton";
import HeadingIcom from "../../assets/Home/Work/Work Heading Below Icon.png";
import InnovativeCulture from "../../assets/Home/Work/Innovative Culture.png";
import InnovativeCultureHover from "../../assets/Home/Work/Innovative Culture Hover.png";
import GlobalExposure from "../../assets/Home/Work/Global Exposure.png";
import GlobalExposureHover from "../../assets/Home/Work/Global Exposure Hover.png";
import ProfessionalGrowth from "../../assets/Home/Work/Professional Growth.png";
import ProfessionalGrowthHover from "../../assets/Home/Work/Professional Growth Hover.png";
import DynamicEnvironment from "../../assets/Home/Work/Dynamic Environment.png"
import DynamicEnvironmentHover from "../../assets/Home/Work/Dynamic Environment Hover.png";

function Work() {
  return (
    <div className="why-work-with-us">
      <div className="why-work-with-us-heading">
        <div className="heading">
          <section>
            <h2>
              Why Work <br />
              With Us
            </h2>
            <p>
              From Logistics to Compliance—Comprehensive Support at Every Step
            </p>
          </section>
          <TransparentButton name="Join us" link="/careers" />
        </div>
        <img src={HeadingIcom} />
      </div>
      <div className="why-work-with-us-container">
        <div className="why-work-with-us-card">
          <div className="text">
            <h3>Innovative Culture</h3>
            <p>Be part of a team that values creativity and innovation</p>
          </div>
          <div className="image">
            <img src={InnovativeCulture} className="main-img" />
            <img src={InnovativeCultureHover} className="hover-img" />
          </div>
        </div>
        <div className="why-work-with-us-card">
          <div className="text">
            <h3>Global Exposure</h3>
            <p>Work on international projects & build a global network</p>
          </div>
          <div className="image">
            <img src={GlobalExposure} className="main-img" />
            <img src={GlobalExposureHover} className="hover-img" />
          </div>
        </div>
        <div className="why-work-with-us-card">
          <div className="text">
            <h3>Professional Growth</h3>
            <p>Oppurtunities for continuus learning and development</p>
          </div>
          <div className="image">
            <img src={ProfessionalGrowth} className="main-img" />
            <img src={ProfessionalGrowthHover} className="hover-img" />
          </div>
        </div>
        <div className="why-work-with-us-card">
          <div className="text">
            <h3>Dynamic Environment</h3>
            <p>A vibrant and inclusive workplace</p>
          </div>
          <div className="image">
            <img src={DynamicEnvironment} className="main-img" />
            <img src={DynamicEnvironmentHover} className="hover-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
