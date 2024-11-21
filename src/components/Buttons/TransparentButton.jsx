import React from 'react'
import { Link } from "react-router-dom";

function TransparentButton({ name, link }) {
  return (
    <Link to={link} className="transparent-button">
      {name}
    </Link>
  );
}

export default TransparentButton
