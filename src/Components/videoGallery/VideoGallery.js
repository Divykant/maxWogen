import React from "react";
import AboutMe from "../aboutME/Components/AboutMe";
import Video from "../home/homeComponent/videoSec/Video";
import RecentVid from "./components/recentVideo/RecentVid";
export default function videoGallery() {
  return (
    <div className="videoGallery">
      <AboutMe
        title="VIDEO CONTENT"
        spanText="Gallery 01"
        headingText="CONTENT CREATOR"
      />
      <Video />
      <RecentVid />
    </div>
  );
}
