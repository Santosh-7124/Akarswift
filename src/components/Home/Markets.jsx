import React from "react";
import ProductImg1 from "../../assets/Home/Markets/Comprehensive Trade Solutions.png";
import ProductImg2 from "../../assets/Home/Markets/Import Services.png";
import ProductImg3 from "../../assets/Home/Markets/Export Services.png";
import ProductImg4 from "../../assets/Home/Markets/Customs Brokerage.png";
import ProductImg5 from "../../assets/Home/Markets/Supply Chain Management.png";
import ProductImg6 from "../../assets/Home/Markets/Logistics and Transportation.png";

function Markets() {
  return (
    <div className="section markets">
      <div className="heading">
        <h2>
          Connecting Markets
          <br />
          with a Range of Expert Services
        </h2>
        <p>From Logistics to Compliance—Comprehensive Support at Every Step</p>
      </div>
      <div className="commitment-container">
        <section>
          <div className="commitment-card">
            <div className="markets-card-img">
              <img src={ProductImg1} alt="Akarswift Recycle Icon" />
            </div>
            <h3>Comprehensive Trade Solutions</h3>
            <p>
              At Akarswift Global, we offer a wide array of services tailored to
              meet the unique needs of our diverse clientele. Our expertise
              spans across various industries, ensuring that your goods reach
              their destination safely and efficiently.
            </p>
          </div>
          <div className="commitment-card">
            <div className="markets-card-img">
              <img src={ProductImg2} alt="Akarswift Recycle Icon" />
            </div>
            <h3>Import Services</h3>
            <p>
              At Akarswift Global Pvt Ltd, we provide comprehensive import
              services designed to streamline the process of bringing goods into
              India. Our team of experts ensures that every aspect of the import
              process is handled with precision and efficiency.
            </p>
          </div>
        </section>
        <section>
          <div className="commitment-card">
            <div className="markets-card-img">
              <img src={ProductImg3} alt="Akarswift Recycle Icon" />
            </div>
            <h3>Export Services</h3>
            <p>
              At Akarswift Global Pvt Ltd, we specialize in providing top-notch
              export services that are tailored to meet the diverse needs of our
              clients.suring that your products arrive at their international
              destinations efficiently and in optimal condition.
            </p>
          </div>
          <div className="commitment-card">
            <div className="markets-card-img">
              <img src={ProductImg4} alt="Akarswift Recycle Icon" />
            </div>
            <h3>Customs Brokerage</h3>
            <p>
              Our customs brokerage services are designed to simplify the
              intricate process of international trade. We ensure your shipments
              clear customs smoothly and efficiently, avoiding delays and
              compliance issues. Our expert team stays up-to-date with the
              latest customs regulations and documentation requirements to
              provide seamless import and export services.
            </p>
          </div>
        </section>
        <section>
          <div className="commitment-card">
            <div className="markets-card-img">
              <img src={ProductImg5} alt="Akarswift Recycle Icon" />
            </div>
            <h3>Supply Chain Management</h3>
            <p>
              Optimizing your supply chain for maximum efficiency and
              cost-effectiveness. Effective supply chain management is essential
              to ensure seamless operations, reduce costs, and maintain high
              levels of customer satisfaction. Our approach to supply chain
              management focuses on enhancing operational efficiency, reducing
              lead times, and driving cost-effectiveness throughout the entire
              supply chain network.
            </p>
          </div>
          <div className="commitment-card">
            <div className="markets-card-img">
              <img src={ProductImg6} alt="Akarswift Recycle Icon" />
            </div>
            <h3>Logistics and Transportation</h3>
            <p>
              Providing end-to-end logistics solutions, including warehousing
              and transportation.we offer comprehensive logistics and
              transportation services to ensure your goods move efficiently from
              origin to destination. Our integrated solutions streamline your
              supply chain, providing reliable and timely delivery while
              optimizing costs.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Markets;
