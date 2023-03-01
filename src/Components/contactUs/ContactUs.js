import React from "react";
import AboutMe from "../aboutME/Components/AboutMe";
import Contact from "../home/homeComponent/contactSec/Contact";
import SocialAcc from "./components/socialAcc/SocialAcc";

export default function ContactUs() {
  return (
    <div className="contactUs">
      <AboutMe
        title="Contact us"
        spanText="Contact"
        headingText="Get in touch"
      />
      <Contact />
      <SocialAcc />
    </div>
  );
}
