/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./First.css"
import "bootstrap"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import project_1 from "../../../images/bootstrap.jpg"
import project_2 from "../../../images/store.jpg";
import project_3 from "../../../images/coffee.jpg";
import project_4 from "../../../images/Capture.PNG";
import project_5 from "../../../images/second.jpg";
import project_6 from "../../../images/first.jpg";
import { Link } from 'react-router-dom';
export default function First() {
  return (
    <div className="first_bg">
      <div className="row">
        <Link
          to={"https://mohamedtarekosman.github.io/react_temp1/"}
          target={"_blank"}
        >
          <img src={project_2} className="project_img"></img>
        </Link>
        <Link
          to={
            "https://mohamedtarekosman.github.io/third_website/third_site.html"
          }
          target={"_blank"}
        >
          <img src={project_1} className="project_img"></img>
        </Link>
        <Link
          to={"https://mohamedtarekosman.github.io/coffee_website/"}
          target={"_blank"}
        >
          <img src={project_3} className="project_img"></img>
        </Link>
      </div>
      <div className="row2">
        <Link
          to={"https://mohamedtarekosman.github.io/weather_app/"}
          target={"_blank"}
        >
          <img src={project_4} className="project_img"></img>
        </Link>
        <Link
          to={
            "https://mohamedtarekosman.github.io/second_website/second_site.html"
          }
          target={"_blank"}
        >
          <img src={project_5} className="project_img"></img>
        </Link>
        <Link
          to={"https://mohamedtarekosman.github.io/first/first_site.html"}
          target={"_blank"}
        >
          <img src={project_6} className="project_img"></img>
        </Link>
      </div>
    </div>
  );
}
