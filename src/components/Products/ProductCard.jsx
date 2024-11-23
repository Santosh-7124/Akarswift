import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card" id={product.id}>
      <div
        className={`product-card-text-and-img ${
          product.reverseLayout ? "reverse" : ""
        }`}
      >
        <div className="product-card-text">
          <h2>{product.text}</h2>
          <div className="product-card-text-container">
            <div className="heading">
              <h3>{product.heading}</h3>
              <p>{product.paragraph}</p>
            </div>
            <ul>
              {product.items &&
                product.items.length > 0 &&
                product.items.map((item, index) => (
                  <li key={index}>
                    <div className="line"></div>
                    <div className="text">
                      <h4>{item.title} :</h4>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="product-card-img">
          <img src={product.img} alt={`Akarswift ${product.text}`} />
        </div>
      </div>
      <div className="product-card-features">
        {product.features &&
          product.features.length > 0 &&
          product.features.map((feature, index) => (
            <div key={index} className="product-card-features-card">
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductCard;
