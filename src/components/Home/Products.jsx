import React, { useState } from "react";
import { Link } from "react-router-dom";
import AgriculturalProducts from "../../assets/Home/Products/Agricultural Products.png";
import IndustrialGoods from "../../assets/Home/Products/Industrial Goods.png";
import ConsumerGoods from "../../assets/Home/Products/Consumer Goods.jpg";
import Pharmaceuticals from "../../assets/Home/Products/Pharmaceuticals.png";
import Automotive from "../../assets/Home/Products/Automotive.jpg";
import SyntheticPaper from "../../assets/Home/Products/Synthetic Paper.jpg";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState({
    img: AgriculturalProducts,
    text: "Agricultural Products",
    link: "/products#AgriculturalProducts",
    heading: "Fresh Produce , Grains and Spices",
    paragraph:
      "At Akarswift Global, we source the finest agricultural products to meet the growing demands of the global market. Our agricultural division focuses on sustainability and quality, ensuring that every product is fresh, nutritious, and responsibly sourced.",
  });

  const products = [
    {
      img: AgriculturalProducts,
      text: "Agricultural Products",
      link: "/products#AgriculturalProducts",
      heading: "Fresh Produce , Grains and Spices",
      paragraph:
        "At Akarswift Global, we source the finest agricultural products to meet the growing demands of the global market. Our agricultural division focuses on sustainability and quality, ensuring that every product is fresh, nutritious, and responsibly sourced.",
    },
    {
      img: IndustrialGoods,
      text: "Industrial Goods",
      link: "/products#IndustrialGoods",
      heading: "Machinery, Tools, and Raw Materials",
      paragraph:
        "Akarswift Global's industrial goods division is dedicated to supplying high-quality machinery, tools, and raw materials essential for various industries. Our products are designed to enhance productivity and efficiency, catering to sectors such as manufacturing, construction, and mining.",
    },
    {
      img: ConsumerGoods,
      text: "Consumer Goods",
      link: "/products#ConsumerGoods",
      heading: "Electronics, Apparel, and Home Goods",
      paragraph:
        "Our consumer goods division offers a wide range of products designed to improve the quality of life for consumers around the world. From state-of-the-art electronics to stylish apparel and practical home goods, we ensure that our products meet the highest standards of quality and innovation.",
    },
    {
      img: Pharmaceuticals,
      text: "Pharmaceuticals",
      link: "/products#Pharmaceuticals",
      heading: "High-Quality Medicines & Healthcare Products",
      paragraph:
        "Akarswift Global's pharmaceutical division is dedicated to improving global health by providing high-quality medicines and healthcare products. Our portfolio includes essential drugs, over-the-counter medications, and healthcare supplies.",
    },
    {
      img: Automotive,
      text: "Automotive",
      link: "/products#Automotive",
      heading: "Vehicles and Automotive Parts",
      paragraph:
        "Our automotive division provides a wide range of vehicles and automotive parts to meet the needs of the global automotive market. From passenger cars to commercial vehicles and spare parts, we ensure that our products are reliable, efficient, and environmentally friendly.",
    },
    {
      img: SyntheticPaper,
      text: "Synthetic Paper",
      link: "/products#SyntheticPaper",
      heading: "Eco-friendly Synthetic Paper",
      paragraph:
        "Our eco-friendly synthetic paper is designed to meet the highest standards of security and sustainability. Ideal for secure documents such as certificates, this paper combines durability with advanced security features to prevent counterfeiting.",
    },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="section home-products">
      <div className="heading">
        <h2>
          Discover Our <br /> Range of Excellence
        </h2>
        <p>Explore Unmatched Quality and Global Reach</p>
      </div>
      <div className="home-products-container">
        <Link to={selectedProduct.link} className="home-products-left">
          <div className="home-products-left-img">
            <img src={selectedProduct.img} alt={selectedProduct.text} />
            <p>{selectedProduct.text}</p>
          </div>
          <div className="home-products-left-card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M18.0048 1.06381C17.9939 1.05286 17.9824 1.04242 17.9705 1.03251C17.9628 1.02609 17.9549 1.01993 17.9469 1.01405C17.9086 0.9859 17.866 0.963042 17.8201 0.946625C17.7672 0.927588 17.7103 0.91729 17.6513 0.917347C17.6356 0.917329 17.6201 0.918042 17.6048 0.919455L4.46265 1.90988C4.18728 1.93064 3.98088 2.17068 4.00164 2.44604C4.02239 2.72141 4.26243 2.92781 4.5378 2.90706L16.3442 2.01729L0.798547 17.563C0.603285 17.7582 0.603285 18.0748 0.798547 18.2701C0.993809 18.4653 1.31039 18.4653 1.50565 18.2701L17.0513 2.7244L16.1616 14.5308C16.1408 14.8062 16.3472 15.0462 16.6226 15.067C16.8979 15.0877 17.138 14.8813 17.1587 14.606L18.1492 1.46385C18.1506 1.44851 18.1513 1.43299 18.1513 1.41733C18.1513 1.35836 18.141 1.30145 18.122 1.24848C18.1172 1.23494 18.1117 1.22168 18.1058 1.20874C18.0907 1.17578 18.0718 1.14413 18.0491 1.11444C18.0355 1.09656 18.0207 1.07965 18.0048 1.06381ZM18.0048 1.06381C18.0079 1.06694 18.011 1.07011 18.0141 1.07332C18.011 1.07012 18.0079 1.06695 18.0048 1.06382C18.0017 1.06068 17.9985 1.0576 17.9953 1.05456C17.9985 1.0576 18.0017 1.06069 18.0048 1.06381Z"
                  stroke="#111111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
        <div className="home-products-right">
          <div className="heading">
            <h3>{selectedProduct.heading}</h3>
            <p>{selectedProduct.paragraph}</p>
          </div>
          <section>
            {products.map((product) => (
              <div
                key={product.text}
                className="home-products-card"
                onClick={() => handleProductClick(product)}
              >
                <img src={product.img} alt={product.text} />
                <p>{product.text}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Products;
