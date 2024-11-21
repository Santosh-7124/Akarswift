import React, { useState } from "react";
import WorldMap from "../../assets/Home/Continents/World Map.png";
import NorthAmerica from "../../assets/Home/Continents/North America.png";
import SouthAmerica from "../../assets/Home/Continents/South America.png";
import Asia from "../../assets/Home/Continents/Asia.png";
import Australia from "../../assets/Home/Continents/Australia.png";
import Europe from "../../assets/Home/Continents/Europe.png";
import Africa from "../../assets/Home/Continents/Africa.png";

function Continents() {
  const [activeContinent, setActiveContinent] = useState("");

  const handleHover = (continent) => {
    setActiveContinent(continent);
  };

  return (
    <div className="section continents">
      <div className="heading">
        <h2>Global Network</h2>
        <p>From Logistics to Compliance—Comprehensive Support at Every Step</p>
      </div>
      <div className="continents-container">
        <div className="continents-map">
          <img src={WorldMap} alt="world map" />
          <img
            src={NorthAmerica}
            className={`overlay-map ${
              activeContinent === "north-america" ? "active" : ""
            }`}
            id="north-america"
          />
          <img
            src={SouthAmerica}
            className={`overlay-map ${
              activeContinent === "south-america" ? "active" : ""
            }`}
            id="south-america"
          />
          <img
            src={Asia}
            className={`overlay-map ${
              activeContinent === "asia" ? "active" : ""
            }`}
            id="asia"
          />
          <img
            src={Australia}
            className={`overlay-map ${
              activeContinent === "australia" ? "active" : ""
            }`}
            id="australia"
          />
          <img
            src={Europe}
            className={`overlay-map ${
              activeContinent === "europe" ? "active" : ""
            }`}
            id="europe"
          />
          <img
            src={Africa}
            className={`overlay-map ${
              activeContinent === "africa" ? "active" : ""
            }`}
            id="africa"
          />
        </div>
        <div className="continents-info">
          <div className="heading">
            <h3>Connecting Continents</h3>
            <p>
              Our expansive global network is the backbone of our operations.
              With partners and offices strategically located around the world,
              Akarswift Global ensures that your goods are transported
              efficiently, safely, and on time.
            </p>
          </div>
          <div className="continents-buttons-container">
            <button
              id="north-america-button"
              onMouseEnter={() => handleHover("north-america")}
              onMouseLeave={() => handleHover("")}
            >
              North America
            </button>
            <button
              id="south-america-button"
              onMouseEnter={() => handleHover("south-america")}
              onMouseLeave={() => handleHover("")}
            >
              South America
            </button>
            <button
              id="asia-button"
              onMouseEnter={() => handleHover("asia")}
              onMouseLeave={() => handleHover("")}
            >
              Asia
            </button>
            <button
              id="australia-button"
              onMouseEnter={() => handleHover("australia")}
              onMouseLeave={() => handleHover("")}
            >
              Australia
            </button>
            <button
              id="europe-button"
              onMouseEnter={() => handleHover("europe")}
              onMouseLeave={() => handleHover("")}
            >
              Europe
            </button>
            <button
              id="africa-button"
              onMouseEnter={() => handleHover("africa")}
              onMouseLeave={() => handleHover("")}
            >
              Africa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Continents;
