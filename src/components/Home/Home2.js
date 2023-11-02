import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillMail } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple">  </span> OUR COMPANY
            </h1>
            <p className="home-about-body">
              We are a dynamic team specializing in creating tailored solutions for clients in need of technology expertise. Our focus extends to building websites, applications, and executing Python projects with a commitment to meeting diverse client needs.
              <br />
              <br /> Our proficiency spans a wide array of technologies, ensuring adaptability to the precise requirements of each unique project.
              <br />
              <br />
              Our dedication lies in meeting client expectations, utilizing our expertise in various technologies such as JavaScript, Python, React.js, and more.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT US</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us via email.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:kalidasvb007@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;