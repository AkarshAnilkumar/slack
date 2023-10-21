import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey peeps, We're <span className="purple">[Company Name]</span>
            <br /> 
            <br />
            At [Your Company Name], we're driven by innovation and dedicated to excellence. With a passionate team of experts, we deliver top-tier solutions tailored to your unique needs. 
            <br />
            From web design to AI & ML Development, we're committed to transforming your ideas into impactful results. 

            <br />
            <br />
            Discover the difference with us.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe in Faith, enjoy the vibe!"{" "}
          </p>
          <footer className="blockquote-footer">Kalidas Vijaybhak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
