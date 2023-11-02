import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by [company name]</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} [company shortname] </h3>
        </Col>
        <Col md="4" className="footer-body">
          <Button variant="dark" onClick={scrollToTop}>
            Back to Top
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
