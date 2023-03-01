import React from "react";
import "./AboutMe.css";

export default function AboutMe(props) {
  return (
    <div className="aboutMe">
      <div className="aboutMe_topDiv">
        <div className="aboutMe_topDivTitleDiv">
          <h2 className="aboutMe_topDivTitle">{props.title}</h2>
        </div>
        <h1 className="aboutMe_topDivHeading strokeHeading">
          <span className="aboutMe_topDivHeadingSpan">
            {props.spanText} <br />
          </span>
          {props.headingText}
        </h1>
      </div>
    </div>
  );
}
