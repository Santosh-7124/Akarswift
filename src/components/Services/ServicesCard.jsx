import React from "react";
import ComprehensiveTradeSolutions from "../../assets/Services/Comprehensive Trade Solutions.png";

function ServicesCard(props) {
  return (
    <div className={`services-card ${props.reverseLayout ? "reverse" : ""}`}>
      <div className="services-card-text">
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </div>
      <div className="services-card-img">
        <img src={props.imgSrc} alt="Akarswift Services Img" />
      </div>
    </div>
  );
}

export default ServicesCard;
