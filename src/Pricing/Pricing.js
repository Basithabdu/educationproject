import React from "react";
import "./Pricing.css";
import { Card } from "antd";

const Pricing = () => {
  return (
    <div>
      <div>
        <button className="pricbtn" type="button">
          Pricing
        </button>
        <h3 className="choose">Choose the plan that fits your needs</h3>
        <p className="para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's<br></br> standard dummy
          text ever since the 1500s.
        </p>
      </div>

      <div style={{ display: "flex", marginLeft: "100px" }}>
        <Card md={4}>
          <img src="./image/Group 33721.png" alt="btnimg1" />
          <p className="pric1">
            Lorem Ipsum is simply dummy text of<br></br> the printing and
            typesetting industry.
          </p>
          <img src="./image/Frame 5902.png" alt="tics1" />
          <img className="l1" src="./image/Line 10.png" alt="line1" />
          <div style={{ display: "flex" }}>
            <p className="dolar1">$ 5200,00/-</p>
            <button className="purch1" type="button">
              Purchase
            </button>
          </div>
        </Card>

        <Card md={4}>
          <img src="./image/Group 28.png" alt="btnimg2" />
          <p className="pric1">
            Lorem Ipsum is simply dummy text of<br></br> the printing and
            typesetting industry.
          </p>
          <img src="./image/Group 30.png" alt="tics2" />
          <img
            style={{ paddingLeft: "16px" }}
            src="./image/Group 32.png"
            alt="tics4"
          />
          <img className="l2" src="./image/Line 11.png" alt="line2" />
          <div style={{ display: "flex" }}>
            <p className="dolar2">$ 5200,00/-</p>
            <button className="purch2" type="button">
              Purchase
            </button>
          </div>
        </Card>

        <Card md={4}>
          <img src="./image/Group 33720.png" alt="btnimg3" />
          <p className="pric1">
            Lorem Ipsum is simply dummy text of<br></br> the printing and
            typesetting industry.
          </p>
          <img src="./image/Group 31.png" alt="tics2" />
          <img
            style={{ paddingLeft: "16px" }}
            src="./image/Group 32.png"
            alt="tics4"
          />
          <img className="l3" src="./image/Line 12.png" alt="line3" />
          <div style={{ display: "flex" }}>
            <p className="dolar3">$ 5200,00/-</p>
            <button className="purch3" type="button">
              Purchase
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
