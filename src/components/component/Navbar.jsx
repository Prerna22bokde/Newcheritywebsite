import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showlist, setShowlist] = useState(false);
  return (
    <>
      <div className="Nav">
        <div className="Nav-logo">
          <img src={logo} alt="logo" />
          <h1>CharitiSite</h1>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            setShowlist(!showlist);
          }}
        >
          <GiHamburgerMenu />
        </div>
        <div className={showlist ? "mobile_navlist" : "Nav-list"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Howitwork">How It Work</NavLink>
            </li>
            <li>
              <NavLink to="/Donate">Donate</NavLink>
            </li>
            <li>
              <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <div id="google_translate_element"></div>
          </ul>
        </div>
      </div>
    </>
  );
}
