/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef } from 'react';
import "./Contact.css";
import co from "../../Assets/contact-img.svg";
import emailjs from "@emailjs/browser";
import { MdOutlineDownloadDone } from "react-icons/md";

export default function Contact() {
  const [buttonText, setButtonText] = useState("Send");
  const form = useRef();

  const handleClick = () => {
    setButtonText("Sending...");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1gbuiin",
        "template_vyzc13j",
        form.current,
        "MbDblTO-jQld3Z5tl",
      )
      .then(
        (result) => {
          setButtonText( <span>
            Sent <MdOutlineDownloadDone />
          </span>)

          setTimeout(() => {
            e.target.reset();
            setButtonText("Send");
          },2000)
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="con_bg" id="contact">
      <div className="svg_image">
        <img src={co} alt="Contact Image" className="contact_image" />
      </div>
      <div className="Content">
        <h2 className="contact_h2">Get In Touch</h2>
        <form className="form1" ref={form} onSubmit={sendEmail}>
          <div className="input_group">
            <input
              className="contact_el"
              type="text"
              id="firstName"
              placeholder="First Name"
              name="firstName"
            />
            <input
              className="contact_el"
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
            />
          </div>
          <div className="input_group">
            <input
              className="contact_el"
              type="email"
              id="email"
              placeholder="Email Address"
              name="email"
            />
            <input
              className="contact_el"
              type="tel"
              id="phone"
              placeholder="Phone No"
              name="phone"
            />
          </div>
          <div>
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              className="contact_el textarea_el"
            />
          </div>
          <button
            className="contact_submit"
            type="submit"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
