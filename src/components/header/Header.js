/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaWhatsapp,FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import {BsList} from "react-icons/bs"
import "./Header.css";
export default function Header() {
  const linkedinurl = "https://www.linkedin.com/in/mohamed-tarek-906432204";
  const phonenumber = "+201148988342";
  function link() {
    window.open(linkedinurl, "_blank");
  }
  function phone() {
    window.open(`https://wa.me/${phonenumber}`, "_blank");
  }
  function navfunction(){
      let l = document.getElementById("list");
      let il = document.getElementById("icon_list");
      let b = document.getElementById("btn");
      let n = document.getElementById("nav");
      if(n.className==="nav")
      {
        l.className = "listn"
        il.className = "icon_listn"
        b.className ="btnn"
        n.className = "navn";
      }
      else{
        l.className = "list";
        il.className = "icon_list";
        b.className = "btn";
        n.className = "nav";
      }
  }
  return (
    <div className="nav" id="nav">
      <div className="logo">LOGO</div>
      {/* logo */}
      <BsList className="ic_mob" onClick={navfunction} />

      <ul className="list" id="list">
        <li
          onClick={() => {
            window.scrollTo(0, 0);
            let n = document.getElementById("nav");
            if (n.className === "navn") {
              navfunction();
            }
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            window.scrollTo(0, 550);
            let n = document.getElementById("nav");
            if (n.className === "navn") {
              navfunction();
            }
          }}
        >
          Skills
        </li>
        <li
          onClick={() => {
            window.scrollTo(0, 1300);
            let n = document.getElementById("nav");
            if (n.className === "navn") {
              navfunction();
            }
          }}
        >
          Projects
        </li>
      </ul>

      {/* list */}
      <ul className="icon_list" id="icon_list">
        <li>
          <button
            className="c"
            onClick={() => {
              link();
              let n = document.getElementById("nav");
              if (n.className === "navn") {
                navfunction();
              }
            }}
          >
            <GrLinkedinOption className="ic" />
          </button>
        </li>

        <li>
          <a
            href="https://github.com/MohamedTarekOsman"
            target={"_blank"}
          >
            <button
              className="c"
              onClick={() => {
                let n = document.getElementById("nav");
                if (n.className === "navn") {
                  navfunction();
                }
              }}
            >
              <FaGithub className="ic" />
            </button>
          </a>
        </li>
        <li> 
            <button
              className="c"
              onClick={() => {
                phone();
                let n = document.getElementById("nav");
                if (n.className === "navn") {
                  navfunction();
                }
              }}
            >
              <FaWhatsapp className="ic" />
            </button>

        </li>
      </ul>
      {/* icon list */}

      <a href="#contact">
        <button
          className="btn"
          id="btn"
          onClick={() => {
            let n = document.getElementById("nav");
            if (n.className === "navn") {
              navfunction();
            }
          }}
        >
          Let'sConnect
        </button>
      </a>
      {/* button */}
    </div>
  );
}
