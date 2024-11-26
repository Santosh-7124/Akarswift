import React from "react";
import Banner from "./Services/Banner";
import ServicesCard from "./Services/ServicesCard";
import { servicesData } from "./Services/data";

function Services() {
  return (
    <>
      <Banner />
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            paragraph={service.paragraph}
            imgSrc={service.imgSrc}
            reverseLayout={index % 2 === 1 ? true : false}
          />
        ))}
      </div>
    </>
  );
}

export default Services;
