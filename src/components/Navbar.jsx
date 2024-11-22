import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/Company Logo.png";
import Name from "/Company Name.png";

function Navbar() {
  const location = useLocation();
  const [navLink, setNavLink] = useState("");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
  ];

  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const activeNavItem = navItems
      .find((item) => item.path === currentPath)
      ?.name.toLowerCase();
    setNavLink(
      activeNavItem || (currentPath === "/contact" ? "contact" : "home")
    );
  }, [location.pathname]);

  function handleContactButton() {
    if (navLink === "contact") {
      setNavLink("home");
    } else {
      setNavLink("contact");
    }
  }

  const buttonText = navLink === "contact" ? "Explore" : "Contact Us";
  const buttonLink = navLink === "contact" ? "" : "contact";

  return (
    <header>
      <section className="navbar-img">
        <img src={Logo} className="navbar-logo" />
        <img src={Name} className="navbar-name" />
      </section>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setNavLink(item.name.toLowerCase())}
            className={
              navLink === item.name.toLowerCase() ? "active-nav-link" : ""
            }
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Link
        to={`/${buttonLink}`}
        className="orange-button"
        onClick={handleContactButton}
      >
        {buttonText}
      </Link>
    </header>
  );
}

export default Navbar;
