/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import "./Footer.css";
export default function Footer() {
   const linkedinurl = "https://www.linkedin.com/in/mohamed-tarek-906432204";
   const phonenumber = "+201148988342";
   function link() {
     window.open(linkedinurl, "_blank");
   }
   function phone() {
     window.open(`https://wa.me/${phonenumber}`, "_blank");
   }
  return (
    <div className="footer_bg">
      <div class="input_container">
        <div className="input_h2">
          <h2>See My Projects At Once & Leave Here Your Email Address</h2>
        </div>
        <input type="text" class="input_field" placeholder="Email Address" />
        <button class="input_button">Submit</button>
      </div>
      <div className="footer_signs">
        <div className="logo2">LOGO</div>
        <ul className="icon_list2">
          <li>
            <button
              className="c"
              onClick={() => {
                link();
              }}
            >
              <GrLinkedinOption className="ic" />
            </button>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100009963788295"
              target={"_blank"}
            >
              <button className="c">
                <FaFacebookF className="ic" />
              </button>
            </a>
          </li>
          <li>
            <button
              className="c"
              onClick={() => {
                phone();
              }}
            >
              <FaWhatsapp className="ic" />
            </button>
          </li>
        </ul>
      </div>
      <p className="copy">
        --Copyrights 2023-- All Rights Reversed here By Eng/ Mohamed Tarek Osman
      </p>
    </div>
  );
}
