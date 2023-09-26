import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  function navfunction(){
    let x= document.getElementById("p_n1");
    x.className="p_n1 pb_nav1";
  }
  return (
    <div className="p_bg" id="projects">
      <div className="p_con">
        <h2 className="project">My Projects</h2>
        <p className="p_para">
          My name is mohamed , I live in monofia , this Some of My Small Projects and Certificates
        </p>
      </div>
      <div className="buttons_nav">
        <Link to="">
          <button className="p_n1 pb_nav1 p_n11" id="p_n1">
            Small-Projects
          </button>
        </Link>
        <Link to="second">
          <button className="pb_nav2" id="p_n22" onClick={navfunction}>
            Certificates
          </button>
        </Link>
        <Link to="third">
          <button className="p_n3 pb_nav3" id="p_n33" onClick={navfunction}>
            About
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
