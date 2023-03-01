import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro_leftDiv">
          <img
            src="img/photo-4-5.png"
            alt="intro_img"
            className="intro_leftDivImg"
          />
        </div>

        <div className="intro_rightDiv">
          <h3 className="intro_rightDivTitle">Introduction </h3>
          <h1 className="intro_rightDivHeading strokeHeading">
            "Hey Everyone"
          </h1>
          <div className="intro_rightDivSubHead">Verification Auhtor</div>
          <p className="intro_rightDivPara">
            Ipsum dolor sit amet consectetur adipiscing elit ut. Id diam
            maecenas ultricies mi eget mauris pharetra et ultrices. Vel turpis
            nunc eget lorem dolor sed. Justo laoreet sit amet cursus sit amet.
            Erat adipiscing commodo elit at. Vulputate dignissim suspendisse in
            est.
          </p>
          <div className="intro_rightOrigin">
            <div className="intro_rightOriginLeft">
              <img
                src="img/country-1-1.png"
                alt="country"
                className="intro_rightOriginLeftImg"
              />
              <div className="intro_rightOriginRight">
                <h1 className="intro_rightOriginRightHeading">IM, Max Wogen</h1>
                <p className="intro_rightOriginRightPara">From Australia</p>
              </div>
            </div>

            <button className="intro_rightButton">Read More </button>
            <p className="intro_rightPara"> FOLLOW & SUBSCRIBE MAXWOGEN</p>
          </div>
        </div>
      </div>
    </>
  );
}
