import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectsData from "./projectData";

function Projects() {
  const [filterTechnology, setFilterTechnology] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Initialize filteredProjects with all projects when the component mounts
  useEffect(() => {
    setFilteredProjects(projectsData);
  }, []);

  // Function to handle filtering when the button is clicked
  const handleFilter = () => {
    const filtered = projectsData.filter(project =>
      project.technologies.toLowerCase().includes(filterTechnology.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <input
          type="text"
          placeholder="Filter by technology..."
          value={filterTechnology}
          onChange={(e) => setFilterTechnology(e.target.value)}
        />
        {/* Button to trigger filtering */}
        <button onClick={handleFilter}>Filter</button>

        <Particle />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Render filtered projects */}
          {filteredProjects.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
