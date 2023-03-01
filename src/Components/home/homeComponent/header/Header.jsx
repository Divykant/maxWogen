import React from "react";
import "./Header.css";
import HeaderMidImg from "../../../../assets/photo-3-1.png";
import HeaderLeftTopImg from "../../../../assets/logo-1-3.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header_left">
          <div className="header_leftTop">
            <img
              src={HeaderLeftTopImg}
              alt="header_leftTopImg"
              className="header_leftTopImg"
            />
          </div>
          <div className="header_leftBottom">
            <img
              src="img/logo-2-2.png"
              alt="img"
              className="header_leftBottomImg"
            />
            <h3 className="header_leftBottomSubHeading">
              Activity & <br /> interaction
            </h3>
            <p className="header_leftBottomPara">
              life is a game to be <br />
              completed
            </p>
            <h1 className="header_leftBottomMainHeading">
              <span>IM</span>
              <br /> Possible
            </h1>
          </div>
        </div>
        <div className="header_mid">
          <img
            src={HeaderMidImg}
            alt="Header Mid Img"
            className="header_midImg"
          />
          <p className="header_midText">Max Wogen</p>
        </div>
        <div className="header_right">
          <div className="header_rightTop">
            <img
              src="img/capture.png"
              alt="img"
              className="header_rightTopImg"
            />
            <h3 className="header_rightTopHeading">
              ART AND <br /> CULTURE <br />
              <span className="header_rightTopHeadingSpan">
                LIFE WITH ART IS BEAUTIFUL
              </span>
            </h3>
          </div>
          <div className="header_rightBottom">
            <img
              src="img/logo-6-3.png"
              alt="img"
              className="header_rightBottomImg"
            />
            <h3 className="header_rightBottomSubHeading">
              TOURING & <br /> TRAVEL -
            </h3>
            <h1 className="header_rightBottomMainHeading">
              BALANCE UP YOUR LIFE 2022 c
            </h1>
          </div>
        </div>

        {/* <img src="img/photo-3-1.png" alt="img" className="header_background" /> */}

        {/* <div className="header_leftDiv">
          <img src="img/logo-2-2.png" alt="img" className="header_leftDivImg" />
          <h3 className="header_leftDivSubHeading">
            Activity & <br /> interaction
          </h3>
          <p className="header_leftDivPara">
            life is a game to be <br />
            completed
          </p>
          <h1 className="header_leftDivMainHeading">
            <span>IM</span>
            <br /> Possible
          </h1>
        </div> */}

        {/* <div className="header_rightDiv">
          <img
            src="img/logo-6-3.png"
            alt="img"
            className="header_rightDivImg1"
          />
          <img src="img/logo-4.png" alt="img" className="header_rightDivImg2" />

          <p className="header_rightDivPara">
            touring & <br />
            travel
          </p>
          <h1 className="header_leftDivMainHeading">
            balance up your life <br />
            2022 c
          </h1>
        </div> */}
      </div>
    </>
  );
}
