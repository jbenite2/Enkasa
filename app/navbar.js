import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="banner">
      <div className="navbar">
        <img src="/logo.png" className="logo" />
        <ul className="nav">
          <li><a href="/">Home</a></li>
          <li><a href="#SectionTwo">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Mirrors</a></li>
          <li><a href="#">Lamps</a></li>
          <li><a href="#">Panels</a></li>
        </ul>
      </div>
      <div className="content">
        <h1>MAKE IT YOURS! FEEL AT HOME.</h1>
        <p>Our products are made with love and care. We make sure that you get the best quality products.</p>
      </div>
    </div>
  );
}
