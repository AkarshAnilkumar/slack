import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  // SiNextdotjs,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { BsGlobe2 } from "react-icons/bs";
import { TbBrandBootstrap } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";

function Techstack() {
  const [hovered, setHovered] = useState(null);

  const handleMouseOver = (icon) => {
    setHovered(icon);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  const techIcons = [
    { icon: <DiJavascript1 />, text: "JavaScript" },
    { icon: <DiNodejs />, text: "Node.js" },
    { icon: <DiReact />, text: "React" },
    // { icon: <SiNextdotjs />, text: "Next.js" },
    { icon: <SiPython />, text: "Python" }, 
    { icon: <TbBrandBootstrap />, text: "Bootstrap" },
    { icon: <DiMongodb />, text: "MongoDB" },
    { icon: <SiFirebase />, text: "Firebase" },
    { icon: <SiPostgresql />, text: "PostgreSQL" },
    { icon: <DiJava />, text: "Java" },
    // { icon: <BsGlobe2 />, text: "Other" },
    { icon: <SiFlutter />, text: "Flutter" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((item, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            {item.icon}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: hovered === index ? "rgba(0, 0, 0, 0.9)" : "transparent",
                color: "white",
                visibility: hovered === index ? "visible" : "hidden",
                opacity: hovered === index ? 1 : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 0.8s",
                fontSize: hovered === index ? "0.5em" : "0.5em", // Adjusted font size
              }}
            >
              <span>{item.text}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
