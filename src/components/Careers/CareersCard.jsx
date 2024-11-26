import React, { useState } from "react";
import Form from "./Form"

function CareersCard({ careers }) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="careers-card">
      <div className="careers-card-heading">
        <div className="heading">
          <h3>{careers.title}</h3>
          <p>{careers.heading}</p>
        </div>
        {!openForm && (
          <div className="orange-button" onClick={() => setOpenForm(true)}>
            Apply Now
          </div>
        )}
      </div>
      {openForm && (
        <div className="careers-card-container">
          <h4>Job Details</h4>
          <div className="careers-card-info-and-form">
            <div className="careers-card-info">
              <div className="careers-card-info-set">
                <span>Location</span>
                <p>:</p>
                <p>{careers.location}</p>
              </div>
              <div className="careers-card-info-set">
                <span>Experience</span>
                <p>:</p>
                <p>{careers.experience}</p>
              </div>
              <div className="careers-card-info-set">
                <span>Requirements</span>
                <p>:</p>
              </div>
              <ul>
                {careers.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
              <div className="careers-card-info-set">
                <span>Qualifications</span>
                <p>:</p>
              </div>
              <ul>
                {careers.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
            <div className="careers-card-form">
            <Form/>
              <div
                onClick={() => setOpenForm(false)}
                className="transparent-button"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareersCard;
