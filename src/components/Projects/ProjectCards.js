import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify",margin:"20px 0",height:"220px" }}>
          {props.description}
        </Card.Text>
       {props.ghLink?<Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          Github
        </Button>:""}
        {props.Github_b?
            
            <Button variant="primary"  href={props.Github_b} target="_blank" style={{marginLeft:"10px"}}>
          <BsGithub /> &nbsp;
          Github
        </Button>:""}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
