import React from "react";

function Form() {
  return (
    <form id="contact">
      <div className="form-container">
        <div className="form-input-divider">
          <div className="form-input">
            <label>
              First Name <span>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="form-input">
            <label>
              Last Name <span>*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              autoComplete="family-name"
              required
            />
          </div>
        </div>
        <div className="form-input">
          <label>
            Email Address <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-input">
          <label>
            Mobile Number <span>*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile number"
            autoComplete="tel"
            required
          />
        </div>
        <div className="form-input">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message here . . ."
            autoComplete="off"
            style={{ resize: "none" }}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
