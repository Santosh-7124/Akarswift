import React from "react";
import TransparentButton from "../Buttons/TransparentButton";

function Contact() {
  return (
    <div className="home-contact">
      <div className="home-contact-container">
        <h2>
          Have Any Queries? <br /> <span> Let’s Connect!</span>
        </h2>
        <TransparentButton name="Contact Us" link="/contact" />
      </div>
    </div>
  );
}

export default Contact;
