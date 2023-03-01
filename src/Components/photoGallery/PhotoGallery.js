import React from "react";
import AboutMe from "../aboutME/Components/AboutMe";
import Happy from "../home/homeComponent/happySec/Happy";
import Documentation from "./components/documentation/Documentation";

export default function PhotoGallery() {
  return (
    <div className="photoGallery">
      <AboutMe
        title="Photo CONTENT"
        spanText="Gallery 02"
        headingText="CONTENT CREATOR"
      />
      <Documentation />
      <Happy />
    </div>
  );
}
