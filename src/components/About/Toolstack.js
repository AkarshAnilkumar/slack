import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import {BsGlobe2} from "react-icons/bs";
import {BsAndroid} from "react-icons/bs";
import {FaRobot} from "react-icons/fa";
import {IoLogoGoogle} from "react-icons/io";
import {CgFigma} from "react-icons/cg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", }}>
      <Col xs={4} md={4} className="tech-icons">
        <BsGlobe2 />
        <br />
        <p style={{ fontSize: "0.25em", paddingBottom: "10px" }}>Web <br/> Development</p>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <BsAndroid />
        <p style={{ fontSize: "0.25em", paddingBottom: "20px" }}>App <br/>Development</p>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <FaRobot />
        <p style={{ fontSize: "0.25em", paddingBottom: "20px" }}>AI & ML <br/> Development</p>
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <CgFigma />
        <p style={{ fontSize: "0.25em", paddingBottom: "20px" }}>UI/UX <br/> Designing</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
