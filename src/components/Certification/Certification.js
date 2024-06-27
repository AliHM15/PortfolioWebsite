import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";
import Certificates from "./CertificateData";

function Certification() {

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificatess I've achieved recently.
        </p>

        <Particle />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Render filtered certificatess */}
          {Certificates.map((certificates, index) => (
            <Col key={index} md={4} className="project-card">
              <CertificationCard
                imgPath={certificates.imgPath}
                title={certificates.title}
                description={certificates.description}
                ghLink = {certificates.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certification;