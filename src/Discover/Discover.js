import React from "react";
import "./Discover.css";
import { Row, Col } from "react-bootstrap";

const Discover = () => {
  return (
    <Row className="bgcolor">
      <div>
        <img className="bgcolor1" src="./image/Ellipse 41.png" alt="bg" />
        <div style={{ display: "flex" }}>
          <Col md={5}>
            <img className="lady" src="./image/lady.png" alt="owmen" />
          </Col>

          <Col md={7} className="discover">
            <h3>Discover your data</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.<br></br> Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s.
            </p>
            <img className="r1" src="./image/1.png" alt="1"></img>
            <img className="r2" src="./image/2.png" alt="2"></img>
            <img className="r3" src="./image/3.png" alt="3"></img>
            <img className="r4" src="./image/4.png" alt="4"></img>
            <h6 className="Lead">Lead management</h6>
            <p className="Lead1">
              Lorem Ipsum is simply dummy text of the<br></br> printing and
              typesetting industry. Lorem<br></br> Ipsum has been the industry's
              standard<br></br> dummy text ever since the 1500s, when an
              <br></br> unknown printer took a galley of type and<br></br>
              scrambled it to make a type specimen book.
            </p>

            <h6 className="Deals">Deals mangement</h6>
            <p className="Deals1">
              Lorem Ipsum is simply dummy text of the<br></br> printing and
              typesetting industry. Lorem<br></br> Ipsum has been the industry's
              standard<br></br> dummy text ever since the 1500s, when an unknown
              <br></br>
              printer took a galley of type and<br></br> scrambled it to make a
              type specimen book.
            </p>

            <h6 className="Manag">Lead management</h6>
            <p className="Manag1">
              Lorem Ipsum is simply dummy text of the<br></br> printing and
              typesetting industry. Lorem<br></br> Ipsum has been the industry's
              standard<br></br> dummy text ever since the 1500s, when an
              <br></br> unknown printer took a galley of type and<br></br>
              scrambled it to make a type specimen book.
            </p>

            <h6 className="Report">Reports management</h6>
            <p className="Report1">
              Lorem Ipsum is simply dummy text of the<br></br> printing and
              typesetting industry. Lorem<br></br> Ipsum has been the industry's
              standard<br></br> dummy text ever since the 1500s, when an
              <br></br> unknown printer took a galley of type and<br></br>
              scrambled it to make a type specimen book.
            </p>
          </Col>
        </div>
      </div>
    </Row>
  );
};

export default Discover;
