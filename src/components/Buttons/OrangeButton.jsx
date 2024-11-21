import React from "react";
import { Link } from "react-router-dom";

function OrangeButton({ name, link }) {
  return (
    <Link to="/" className="orange-button">
      {name}
    </Link>
  );
}

export default OrangeButton;