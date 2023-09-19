import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="Footer">
        <p className="Need">
          Need help or have a question? Sure thing, we are here to help!
          <br></br> For our support, Contact us anytime.
        </p>
        <button className="contactbtn1" type="button">
          Contact Sales
          <button className="arrowbtn" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              fill="white"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </button>

        <img className="line" src="./image/Line.png" alt="Line" />
        <p className="Fpara">
          © Copyright 2023 Growth Rudder, All rights reserved. Various
          trademarks held by their respective owners.
        </p>
      </div>
      <div>
        <img className="Logos" src="./image/Frame 33713.png" alt="logos" />
      </div>
    </div>
  );
};

export default Footer;
