import React, { useState } from "react";
import "./NavbarStyles.css";
import { RiShieldCheckLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (path) => {
    if (location.pathname === path) return;
    setOpen(false); // close sidebar
  };

  return (
    <nav className="container-nav">
      <h1 className="nav-logo">
        <Link id="nav-logo" to="/" onClick={() => handleClick("/")}>
          MyL<span id="zeros" style={{ color: "red" }}>0</span>g
          <span id="zeros" style={{ color: "red" }}>0</span>
          <RiShieldCheckLine />
        </Link>
      </h1>

      {/* Hamburger / Close Icon */}
      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          <AiOutlineClose
            className="close-icon"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          />
        )}
      </div>

      {/* Sidebar */}
      <ul className={`nav-ul ${open ? "open" : ""}`}>

        <li className="nav-li">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") e.preventDefault();
              handleClick("/");
            }}
          >
            Home
          </Link>
        </li>

        <li className="nav-li">
          <Link to="/about" onClick={() => handleClick("/about")}>
            About
          </Link>
        </li>

        <li className="nav-li">
          <Link to="/skills" onClick={() => handleClick("/skills")}>
            Skills
          </Link>
        </li>

        <li className="nav-li">
          <Link to="/contact" onClick={() => handleClick("/contact")}>
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
