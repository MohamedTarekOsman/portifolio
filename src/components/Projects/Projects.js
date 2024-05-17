import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import emplyeeMnagement from "../../Assets/Projects/emplyeeManagement.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import seff from "../../Assets/Projects/seff.png";
import movie from "../../Assets/Projects/Movie.png";
import zuwad from "../../Assets/Projects/zuwad.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce platform"
              description="Complete E-commerce System Have All Features in any Ecommerce System like admin dashboard, shoping cart, online payment, copouns addition, authentication and authorization and many other features."
              ghLink="https://github.com/MohamedTarekOsman/e-commerce-front"
              Github_b="https://github.com/MohamedTarekOsman/E-commerce-back"
              demoLink="https://e-commerce-front-woad-phi.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emplyeeMnagement}
              isBlog={false}
              title="Employee Management System"
              description="System for Manageing employees and looking for their progress and give them tasks to complete and check for its compleation and many other features."
              demoLink="https://graduation-project-front-end.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zuwad}
              isBlog={false}
              title="Qurran Teacher"
              description="Game System for learning children Quraan with an instersting way that make a child like in the game and he must complete level to go to next level and so on."
              demoLink="https://zuwad.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seff}
              isBlog={false}
              title="E-Learning Platform"
              description="E-learning Platform has now more than 30k users participated in that have many features like authentication and authentication, profile for each student with courses and progress, cv builder, certificate builder template and many other features."
              demoLink="https://sefacademy.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Impressive portfolio with dark theme built with modern react like liberaries like react-bootstrap, react-icons, react-github-calenders, react-pdf ."
              ghLink="https://github.com/MohamedTarekOsman/portifolio"
              demoLink="https://portifolio-amber-nine-22.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movies App"
              description="Movies App that show list of movies with detailfor each movie, pagination and search features."
              ghLink="https://github.com/MohamedTarekOsman/Movie_app"
              demoLink="https://mohamedtarekosman.github.io/Movie_app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
