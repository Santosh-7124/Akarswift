import React from "react";
import RecycleIcon from "../../assets/Home/Recycle Icon.png";
import LogisticsIcon from "../../assets/Home/Logistics Icon.png";

function Commitment() {
  return (
    <div className="section commitment">
      <div className="heading">
        <h2>
          Commitment to <br /> Greener Future
        </h2>
        <p>From Logistics to Compliance—Comprehensive Support at Every Step</p>
      </div>
      <div className="commitment-container">
        <section>
          <div className="commitment-card">
            <img src={RecycleIcon} alt="Akarswift Recycle Icon" />
            <h3>Eco-Friendly Packaging</h3>
            <p>
              Utilizing biodegradable and recyclable materials to reduce waste
              and environmental impact. Our commitment extends beyond just
              materials; we implement innovative packaging designs that minimize
              resource usage, enhance product protection, and optimize
              logistics. We actively seek partnerships with suppliers who share
              our vision for sustainability, ensuring that our entire supply
              chain adheres to the highest environmental standards.
            </p>
          </div>
          <div className="commitment-card">
            <img src={LogisticsIcon} alt="Akarswift Recycle Icon" />
            <h3>Green Logistics</h3>
            <p>
              Implementing energy-efficient transportation methods to cut down
              carbon emissions. Our approach to green logistics encompasses a
              comprehensive strategy designed to reduce our environmental
              footprint while maintaining the highest standards of efficiency
              and reliability. By prioritizing green logistics, we not only
              contribute to the reduction of carbon emissions but also enhance
              the overall efficiency and sustainability of our transportation
              operations.
            </p>
          </div>
        </section>
        <section>
          <div className="commitment-card">
            <img src={RecycleIcon} alt="Akarswift Recycle Icon" />
            <h3>Sustainable Sourcing</h3>
            <p>
              Ensuring that our products are sourced from environmentally
              responsible suppliers. Prioritizing suppliers who use sustainable
              materials and processes that minimize the consumption of natural
              resources and reduce environmental impact. By focusing on
              sustainable sourcing, we aim to foster a more responsible and
              eco-conscious supply chain, enhancing our environmental
              stewardship while delivering high-quality products to our
              customers.
            </p>
          </div>
          <div className="commitment-card">
            <img src={LogisticsIcon} alt="Akarswift Recycle Icon" />
            <h3>Carbon Footprint Reduction</h3>
            <p>
              Investing in technologies and practices that minimize our carbon
              emissions. Our commitment to reducing our carbon footprint is
              central to our sustainability strategy. We focus on implementing
              innovative solutions and adopting best practices across all areas
              of our operations. By focusing on carbon footprint reduction, we
              aim to significantly lower our greenhouse gas emissions,
              contribute to global climate goals, and promote a more sustainable
              future.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Commitment;
