import React from "react";
import Banner from "./About/Banner";
import Continents from "./Home/Continents";
import Commitment from "./Home/Commitment";
import MissionVision from "./About/MissionVision";
import Work from "./Home/Work";
import Contact from "./Home/Contact";

function About() {
  return (
    <>
      <Banner />
      <Continents />
      <Commitment />
      <MissionVision />
      <Work />
      <Contact />
    </>
  );
}

export default About;
