import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://freehtmldesigns.com/wp-content/uploads/2017/08/Animated-CSS-Hamburger-Menu-Icon.png"
        alt="levi pic"
      />
    </div>
  );
}

export default Navbar;
