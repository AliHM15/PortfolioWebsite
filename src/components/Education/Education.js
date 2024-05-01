import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


function Education() {
  // Education data
  const educationData = [
    {
      institution: "National University of Computer and Emerging Technologies FAST",
      degree: "Bachelor of Science",
      major: "Computer Science",
      grades: '3.46/4 GPA',
      startDate: "2020",
      endDate: "2024",
    },
    {
    institution: "Blue Jays School System",
    degree: "A'Levels",
    major: "Pre-Engineering",
    grades: "2 A*, 1 B",
    startDate: "2018",
    endDate: "2020",
    },
    {
    institution: "Falcon House Grammar School",
    degree: "O'Levels",
    major: "Pre-Engineering",
    grades: "1 A*, 3 A's, 4 B's",
    startDate: "2016",
    endDate: "2018",
    },
  ];

  return (
    <Container
      fluid
      className="home-about-section"
      style={{ color: "white"}}
    >
        <br />
        <br />
      <Particle />
      <h1>Education</h1>
      <br />
      <br />
      <br />
      <ul>
      <Row >  
        {educationData.map((education, index) => (
          <Col>
          <li key={index}>
            <h3>
              {education.degree} in {education.major}
            </h3>
            <p>{education.institution}</p>
            <p>
                Grades: {education.grades}
            </p>
            <p>
              {education.startDate} - {education.endDate}
            </p>
          </li>
          </Col>
        ))}
        </Row>
      </ul>
    </Container>
  );
}

export default Education;
