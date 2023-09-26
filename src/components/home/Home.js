/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import astro from "../../images/header-img.svg";
import resume from "./CV.pdf";
import "./Home.css";

export default function Home() {
  let phrases = [
    "Front-End Web Developer",
    "Back-End Web Developer",
    "Full-Stack Web Developer",
  ];
  ////////////////////////////////////////////////
  const [text, setText] = useState("");
  const [reverse, setReverse] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const addLetter = () => {
      setText(
        reverse? text.slice(0, text.length - 1): phrases[currentIndex].slice(0, text.length + 1)
      );
      if (text.length === phrases[currentIndex].length) {
        setReverse(true);
        timeoutId = setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % phrases.length);
          setReverse(false);
        }, 4600);
      } else if (text.length === 0 && reverse) {
        setReverse(false);
      }

      timeoutId = setTimeout(addLetter, 200);
    };
    timeoutId = setTimeout(addLetter, 200);

    return () => clearTimeout(timeoutId);
  }, [text, currentIndex, reverse]);

  return (
    <div className="home_page">
      <img src={astro} className="svg_img" />
      <div className="left">
        <a href={resume} download="CV">
          <button className="welcome">Click to Download CV</button>
        </a>
        <h2 className="intro">Hi! I'm Mohamed Tarek , {text}|</h2>
        <p className="home_para">
          Hello Everyone , I have 1 year of Experience in Web Development
        </p>
        <a href="#contact" style={{ textDecoration: "none" }}>
          <div className="home_connect">
            <p className="homecon_para">Let's Connect</p>
            <BsArrowRightCircle className="ic2" />
          </div>
        </a>
      </div>
    </div>
  );
}
