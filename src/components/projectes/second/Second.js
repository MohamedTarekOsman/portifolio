/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Second.css";
import "bootstrap";
import project_1 from "../../../images/IMG_20221127_164412.jpg";
import project_2 from "../../../images/IMG_20221127_164507.jpg";
import project_3 from "../../../images/N03_Mohamed[8]_page-0001.jpg";
import project_4 from "../../../images/sef_back.PNG";
import project_5 from "../../../images/sef_front.PNG";
import project_6 from "../../../images/WhatsApp Image 2021-05-04 at 5.19.05 AM.jpeg";
export default function Second() {
  return (
    <div className="first_bg">
      <div className="row3">
          <img src={project_2} className="project_img1"></img>
          <img src={project_3} className="project_img1"></img>
          <img src={project_1} className="project_img1"></img>
      </div>
      <div className="row4">
          <img src={project_4} className="project_img1"></img>
          <img src={project_6} className="project_img1"></img>
          <img src={project_5} className="project_img1"></img>
      </div>
    </div>
  );
}
