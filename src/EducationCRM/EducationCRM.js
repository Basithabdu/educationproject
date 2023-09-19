import React from "react";
import "./EducationCRM.css";

const EducationCRM = () => {
  return (
    <div className="educationsection">
      <div className="education">
        <h6>
          <i>
            Lorem Ipsum is simply dummy text Lorem<br></br> Ipsum is simply
            dummy text Lorem Ipsum is<br></br> simply dummy text
          </i>
        </h6>

        <h1>Education CRM</h1>

        <h6>
          <i>It is a long established fact that a reader</i>
        </h6>

        <button className="contactbtn" type="button">
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
        <br></br>

        <img className="socialimage" src="./image/Frame 5881.png" alt="email" />
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <img
            className="imageanimate"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-itemScope="1"
            src="./image/Education CRM - Landing.png"
            alt="im1"
          />
        </div>
        <div>
          <img
            className="imageanimate"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            src="./image/Education CRM1 - Landing.png"
            alt="im2"
          />
        </div>
        <div>
          <img
            className="imageanimate"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            src="./image/Education CRM2 - Landing.png"
            alt="im3"
          />
        </div>
        <div>
          <img
            className="imageanimate"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            src="./image/Education CRM3 - Landing.png"
            alt="im4"
          />
        </div>
        <div>
          <img
            className="imageanimate"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            src="./image/Education CRM4 - Landing.png"
            alt="im5"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationCRM;
