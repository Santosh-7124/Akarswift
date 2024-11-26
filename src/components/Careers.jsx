import React from "react";
import Banner from "./Careers/Banner";
import Work from "./Home/Work";
import CareersCard from "./Careers/CareersCard";
import { careersData } from "./Careers/data";

function Careers() {
  return (
    <>
      <Banner />
      <Work />
      <div className="careers-container">
        <h2>
          Current <span>Openings</span>
        </h2>
        {careersData.map((careers,index) => (
          <CareersCard key={index} careers={careers} />
        ))}
      </div>
    </>
  );
}

export default Careers;
