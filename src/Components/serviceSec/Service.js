import React from "react";
import AboutMe from "../aboutME/Components/AboutMe";
import Year from "../aboutME/Components/yearSec/Year";
import Idea from "../home/homeComponent/ideaSec/Idea";
import Company from "../home/homeComponent/companySec/Company";
import Skill from "./components/skillSec/Skill";

export default function Service() {
  return (
    <div className="service">
      <AboutMe
        title="OUR SERVICE"
        spanText="Services"
        headingText="WE create aRT & Taste"
      />
      <Year
        img="2012"
        title="CREATIVE VIDEO"
        subTitle="Activity & Creativity"
        link="Discover Now >"
        para="Hac habitasse platea dictumst quisque sagittis purus Tristique senectus et netus."
      />
      <Idea />
      <Skill />
      <Company />
    </div>
  );
}
