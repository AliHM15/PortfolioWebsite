import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Education() {
  // Education data
  const educationData = [
    {
      institution:
        "National University of Computer and Emerging Technologies FAST",
      degree: "Bachelor of Science",
      major: "Computer Science",
      grades: "3.49/4 GPA",
      startDate: "2020",
      endDate: "2024",
      courses:
        "Entrepreneurship, DevOps, Agile Software Project Management, Recommender Systems, Digital Transformation: Tools and Techniques, Information Processing Techniques, Information Security, Professional Practices in IT, Technical and Business Writing, Deep Learning for Perception, Software Engineering, Computer Networks, Computer Networks, Artificial Intelligence, Probability and Statistics, Psychology, Programming Fundamentals, Theory of Automata, Operating Systems, Numerical Computing, Linear Algebra, Fundamentals of Management, Computer Organization and Assembly Language, Data Structures, Discrete Structures,English Composition and Comprehension, Calculus I, Differential Equations/Calculus II, Applied Physics, Object Oriented Programming ,	Digital Logic Design ,Digital Logic Design, Differential Equations, Communication & Presentation Skills, Pakistan Studies",
    },
    {
      institution: "Blue Jays School System",
      degree: "A'Levels",
      major: "Pre-Engineering",
      grades: "2 A's, 1 B",
      startDate: "2018",
      endDate: "2020",
      courses: "Maths, Physics Chemistry",
    },
    {
      institution: "Falcon House Grammar School",
      degree: "O'Levels",
      major: "Pre-Engineering",
      grades: "1 A*, 3 A's, 4 B's",
      startDate: "2016",
      endDate: "2018",
      courses:
        "Urdu, Pakistan Studies, Islamiyat, Maths, English, Computer Science, Additional Maths, Chemistry, Physics",
    },
  ];

  return (
    <Container fluid className="home-about-section" style={{ color: "white" }}>
      <br />
      <Particle />
      <h1>Education</h1>
      <br />
      <ul>
        <Row>
          {educationData.map((education, index) => (
            <Col>
              <li key={index}>
                <h3>
                  {education.degree} in {education.major}
                </h3>
                <p>{education.institution}</p>
                <p>Grades: {education.grades}</p>
                <p>
                  {education.startDate} - {education.endDate}
                </p>
                <p>
                  {education.courses}
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
