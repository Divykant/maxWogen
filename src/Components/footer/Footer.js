import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_topDiv">
        <h2 className="footer_topDivTitle">Let's Talk</h2>
        <h1 className="footer_topDivHeading">Have any project in mind?</h1>
        <ul className="footer_topDivLinks">
          <li className="footer_topDivLinksList">
            <a href="#" className="footer_topDivLinksListTag">
              <FaFacebookF />
            </a>
          </li>
          <li className="footer_topDivLinksList">
            <a href="#" className="footer_topDivLinksListTag">
              <FaInstagram />
            </a>
          </li>
          <li className="footer_topDivLinksList">
            <a href="#" className="footer_topDivLinksListTag">
              <FaTwitterSquare />
            </a>
          </li>
          <li className="footer_topDivLinksList">
            <a href="#" className="footer_topDivLinksListTag">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>

      <hr className="footer_line" />
      <div className="footer_bottomDiv">
        <h1 className="footer_bottomDivTitle">
          <span className="footer_bottomDivTitleSpan">MAX</span>
          WOgen
        </h1>
        <p className="footer_bottomDivCopy">
          MAX with Passion by Rometheme © 2022 All rights reserved
        </p>
        <div className="footer_bottomDivLinks">
          <a href="#">Terms and Condition</a>
          <br />
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
