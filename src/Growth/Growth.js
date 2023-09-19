import React from "react";
import "./Growth.css";
import { Col, Row } from "react-bootstrap";

const Growth = () => {
  return (
    <Row className="background">
      <div>
        <div style={{ display: "flex" }}>
          <Col md={5}>
            <h1 className="why">Why Growth Rudder</h1>
            <p className="p1">
              Lorem Ipsum is simply dummy text of the printing and<br></br>{" "}
              typesetting industry. Lorem Ipsum has been the industry's<br></br>{" "}
              standard dummy text ever since the 1500s. Lorem Ipsum<br></br> is
              simply dummy text of the printing and typesetting<br></br>{" "}
              industry. Lorem Ipsum has been the industry's standard<br></br>{" "}
              dummy text ever since the 1500s.
            </p>

            <p className="p2">
              Lorem Ipsum is simply dummy text of the printing and<br></br>{" "}
              typesetting industry. Lorem Ipsum has been the industry's<br></br>{" "}
              standard dummy text ever since the 1500s. Lorem Ipsum is<br></br>
              simply dummy text of the printing and typesetting industry.
              <br></br> Lorem Ipsum has been the industry's standard<br></br>{" "}
              dummy<br></br> text ever since the 1500s.
            </p>

            <p className="p3">
              Lorem Ipsum is simply dummy text of the printing and<br></br>{" "}
              typesetting industry. Lorem Ipsum has been the industry's<br></br>{" "}
              standard dummy text ever since the 1500s. Lorem Ipsum is<br></br>
              simply dummy text of the printing and typesetting industry.
              <br></br> Lorem Ipsum has been the industry's standard dummy text
              <br></br> ever since the 1500s.
            </p>
          </Col>

          <Col md={7}>
            <img className="sst" src="./image/system.png" alt="sys" />
            <img className="sst1" src="./image/hand.png" alt="hand" />
          </Col>
        </div>
      </div>
    </Row>
  );
};

export default Growth;
