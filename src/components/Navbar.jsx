import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/Company Logo.png";
import Name from "/Company Name.png";

function Navbar() {
  const location = useLocation();
  const [navLink, setNavLink] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

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
      <Link to="/" className="navbar-img">
        <img src={Logo} className="navbar-logo" />
        <img src={Name} className="navbar-name" />
      </Link>
      <nav className="desktop">
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
        className="orange-button desktop"
        onClick={handleContactButton}
      >
        {buttonText}
      </Link>
      <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          style={{
            display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
          }}
        >
          <path
            d="M16.6669 15.7013C16.8793 15.7016 17.0836 15.7829 17.2381 15.9287C17.3925 16.0745 17.4854 16.2738 17.4979 16.4858C17.5103 16.6979 17.4413 16.9067 17.305 17.0695C17.1687 17.2324 16.9753 17.3371 16.7644 17.3622L16.6669 17.368H3.33358C3.12118 17.3678 2.91688 17.2864 2.76244 17.1406C2.60799 16.9948 2.51505 16.7955 2.5026 16.5835C2.49015 16.3715 2.55914 16.1627 2.69546 15.9998C2.83179 15.8369 3.02516 15.7323 3.23608 15.7072L3.33358 15.7013H16.6669ZM16.6669 9.868C16.8879 9.868 17.0999 9.9558 17.2562 10.1121C17.4124 10.2684 17.5002 10.4803 17.5002 10.7013C17.5002 10.9223 17.4124 11.1343 17.2562 11.2906C17.0999 11.4469 16.8879 11.5347 16.6669 11.5347H3.33358C3.11256 11.5347 2.9006 11.4469 2.74432 11.2906C2.58804 11.1343 2.50024 10.9223 2.50024 10.7013C2.50024 10.4803 2.58804 10.2684 2.74432 10.1121C2.9006 9.9558 3.11256 9.868 3.33358 9.868H16.6669ZM16.6669 4.03467C16.8879 4.03467 17.0999 4.12247 17.2562 4.27875C17.4124 4.43503 17.5002 4.64699 17.5002 4.868C17.5002 5.08902 17.4124 5.30098 17.2562 5.45726C17.0999 5.61354 16.8879 5.70133 16.6669 5.70133H3.33358C3.11256 5.70133 2.9006 5.61354 2.74432 5.45726C2.58804 5.30098 2.50024 5.08902 2.50024 4.868C2.50024 4.64699 2.58804 4.43503 2.74432 4.27875C2.9006 4.12247 3.11256 4.03467 3.33358 4.03467H16.6669Z"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          style={{
            display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
          }}
        >
          <path
            d="M1.63196 10.0704L6.00113 5.7012L10.3703 10.0704M10.3703 1.33203L6.00029 5.7012L1.63196 1.33203"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`mobileNavbar mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => {
                setNavLink(item.name.toLowerCase());
                toggleMobileNav();
              }}
              className={
                navLink === item.name.toLowerCase() ? "active-nav-link" : ""
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link to="/contact" onClick={toggleMobileNav} className="orange-button">Contact Us</Link>
      </div>
    </header>
  );
}

export default Navbar;
