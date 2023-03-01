import React from "react";
import "./Home.css";
import Header from "./homeComponent/header/Header";
import Work from "./homeComponent/works/Work";
import Intro from "./homeComponent/introSec/Intro";
import Video from "./homeComponent/videoSec/Video";
import Idea from "./homeComponent/ideaSec/Idea";
import Happy from "./homeComponent/happySec/Happy";
import Offer from "./homeComponent/offerSec/Offer";
import Team from "./homeComponent/teamSec/Team";
import Testimonial from "./homeComponent/testimonial/Testimonial";
import Company from "./homeComponent/companySec/Company";
import Follower from "./homeComponent/followerSec/Follower";
import Contact from "./homeComponent/contactSec/Contact";
import Blog from "../blogSec/Blog";
export const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <Work />
        <Intro />
        <Video />
        <Idea />
        <Happy />
        <Offer />
        <Team />
        <Testimonial />
        <Company />
        <Follower />
        <Contact />
        <Blog />
      </div>
    </>
  );
};
