import React from "react";
import MailIcon from "../../assets/Contact/Mail Icon.svg";
import LocationIcon from "../../assets/Contact/Location Icon.svg";
import PhoneIcon from "../../assets/Contact/Phone Icon.svg"

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info-set">
        <div className="contact-info-set-heading">
          <div className="contact-info-set-icon">
            <img src={MailIcon} alt="mail icon" />
          </div>
          <div className="contact-info-set-info">
            <h3>Mail Us</h3>
            <p>Speak to Our Friendly Team</p>
          </div>
        </div>
        <a
          href="mailto:info@akarmaxs.in"
          target="_blank"
          className="contact-info-set-button"
        >
          info@akarmaxs.in
        </a>
      </div>
      <div className="contact-info-set">
        <div className="contact-info-set-heading">
          <div className="contact-info-set-icon">
            <img src={LocationIcon} alt="location icon" />
          </div>
          <div className="contact-info-set-info">
            <h3>Location</h3>
            <p>Visit to our HQ</p>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Akarmaxs"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info-set-button"
        >
          View on Google Maps
        </a>
      </div>
      <div className="contact-info-set">
        <div className="contact-info-set-heading">
          <div className="contact-info-set-icon">
            <img src={PhoneIcon} alt="mail icon" />
          </div>
          <div className="contact-info-set-info">
            <h3>Call Us</h3>
            <p>Mon - Fri 9AM - 5PM</p>
          </div>
        </div>
        <a
          href="tel:08026618661"
          target="_blank"
          className="contact-info-set-button"
        >
          080-26618661
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
