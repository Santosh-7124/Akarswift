import React from "react";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Commitment from "./Home/Commitment";
import Markets from "./Home/Markets";
import MissionVision from "./Home/MissionVision";
import Products from "./Home/Products";
import Continents from "./Home/Continents";

function Home() {
  return (
    <>
      <Banner />
      <Marquee />
      <Commitment />
      <Markets />
      <MissionVision />
      <Products />
      <Continents />
    </>
  );
}

export default Home;
