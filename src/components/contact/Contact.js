/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import "./Contact.css";
import co from "../../images/contact-img.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {

 const [buttonText, setButtonText] = useState("Send");
 function handleClick() {
   setButtonText("Sending...");
   setTimeout(() => {
    setButtonText("Successfully Sent!");
   }, 1000);
 }
       const form = useRef();

       const sendEmail = (e) => {
         e.preventDefault();

         emailjs
           .sendForm(
             "service_1gbuiin",
             "template_vyzc13j",
             form.current,
             "BcA5iVypenCAnnbPR"
           )
           .then(
             (result) => {
               console.log(result.text);
               e.target.reset();
               setButtonText("Send")
             },
             (error) => {
               console.log(error.text);
             }
           );
       };
  return (
    <div className="con_bg" id="contact">
      <div className="svg_image">
        <img src={co} alt="contact image" className="contact_image"></img>
      </div>
      <div className="Content">
        <h2 className="contact_h2">Get In Touch</h2>
        <form className="form1" ref={form} onSubmit={sendEmail}>
          <div>
            <input
              className="contact_el"
              type="text"
              id="firstName"
              placeholder="First Name"
              name="firstName"
              //   value={formData.firstName}
              //   onChange={handleInputChange}
            />
            <input
              className="contact_el"
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              //   value={formData.lastName}
              //   onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className="contact_el"
              type="email"
              id="email"
              placeholder="Email Address"
              name='email'
              //   value={formData.email}
              //   onChange={handleInputChange}
            />

            <input
              className="contact_el"
              type="tel"
              id="phone"
              placeholder="Phone No"
              name='phone'
              //   value={formData.phone}
              //   onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              id="message"
              placeholder="Message"
              name='message'
              // value={formData.message}
              // onChange={handleInputChange}
            />
          </div>
          <button
            style={{cursor: 'pointer'}}
            className="contact_submit"
            type="submit"
            onClick={handleClick}
            value="Send"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
