import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Company Logo.png";
import Name from "/Company Name.png";
import Location from "../assets/Footer/Location Icon.png";
import Phone from "../assets/Footer/Phone Icon.png";
import Mail from "../assets/Footer/Mail Icon.png";
import Facebook from "../assets/Footer/Facebook Icon.png";
import LinkedIn from "../assets/Footer/LinkedIn Icon.png";
import Instagram from "../assets/Footer/Instagram Icon.png";
import Twitter from "../assets/Footer/Twitter Icon.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-up">
        <div className="footer-line"></div>
        <div className="footer-up-container">
          <div className="footer-up-left">
            <section>
              <img src={Logo} className="footer-logo" />
              <img src={Name} className="footer-name" />
            </section>
            <p>
              Leading the future of Global trade with innovative solutions and
              sustainable practices
            </p>
          </div>
          <div className="footer-up-right">
            <div className="footer-links-internal">
              <section>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">PRODUCTS</Link>
              </section>
              <section>
                <Link to="/services">SERVICES</Link>
                <Link to="/careers">CAREERS</Link>
                <Link to="/contact">Contact us</Link>
              </section>
            </div>
            <div className="footer-links-external">
              <a
                href="https://www.google.com/maps/place/Akarswift+Global+Pvt.+Ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Location} alt="Location" />
                <p>Akarswift Global Pvt. Ltd</p>
              </a>
              <a href="tel:+919876543210">
                <img src={Phone} alt="Phone" />
                <p>+91 98765 43210</p>
              </a>
              <a href="mailto:info@akarmaxs.in">
                <img src={Mail} alt="Mail" />
                <p>info@akarmaxs.in</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="footer-line"></div>
        <div className="footer-down-container">
          <p>© {currentYear} • Akarswift Global. All rights reserved</p>
          <div className="footer-socials">
            <a href="#" target="_blank">
              <img src={Facebook} />
            </a>
            <a href="#" target="_blank">
              <img src={LinkedIn} />
            </a>
            <a href="#" target="_blank">
              <img src={Instagram} />
            </a>
            <a href="#" target="_blank">
              <img src={Twitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
