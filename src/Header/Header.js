import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <img src="./image/logo.png" alt="logo" />
      </div>
      <div className="NavBar">
        <img src="./image/nav links.png" alt="nav" />
      </div>
    </div>
  );
};

export default Header;
