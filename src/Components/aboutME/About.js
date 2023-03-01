import React from "react";
import AboutMe from "./Components/AboutMe";
import Intro from "../home/homeComponent/introSec/Intro";
import Story from "../aboutME/Components/storysec/story";
import Year from "../aboutME/Components/yearSec/Year";
import Experience from "../aboutME/Components/experienceSec/Experience";
import Offer from "../home/homeComponent/offerSec/Offer";
import Team from "../home/homeComponent/teamSec/Team";
import Follower from "../home/homeComponent/followerSec/Follower";
import Company from "../home/homeComponent/companySec/Company";

export default function About() {
  return (
    <div>
      <AboutMe title="About ME" spanText="Hello," headingText="I'm max wogen" />
      <Intro />
      <Story />
      <Year
        img="2012"
        title="Started"
        para="Hac habitasse platea dictumst quisque sagittis purus Tristique senectus et netus."
      />
      <Experience />
      <Offer />
      <Team />
      <Follower />
      <Company />
    </div>
  );
}
