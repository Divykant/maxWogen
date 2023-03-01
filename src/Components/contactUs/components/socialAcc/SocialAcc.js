import React from "react";
import LeftImg from "../../../../assets/video-5-1.jpg";
import "./SocialAcc.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

export default function SocialAcc() {
  return (
    <div className="socialAcc">
      <div className="socialAcc_leftDiv">
        <img src={LeftImg} alt="Left_Img" className="socialAcc_leftDivImg" />
      </div>
      <div className="socialAcc_rightDiv">
        <h2 className="socialAcc_rightDivTitle">mediac social</h2>
        <h1 className="socialAcc_rightDivHeading strokeHeading">
          Social Accounts
        </h1>
        <p className="socialAcc_rightDivPara ">
          Sociis natoque penatibus et magnis dis parturient. Viverra orci
          sagittis eu volutpat odio facilisis mauris sit amet. A cras semper
          auctor neque vitae tempus quam pellentesque nec.
        </p>
        <div className="socialAcc_rightDivLinks">
          <div className="socialAcc_rightDivLinksLayer">
            <div className="socialAcc_rightDivLinksLayerCard">
              <a href="#" className="socialAcc_rightDivLinksLayerCardLogo">
                <FaYoutube />
              </a>
              <h1 className="socialAcc_rightDivLinksLayerCardText">
                <span className="socialAcc_rightDivLinksLayerCardSpan">
                  Max Wogen Officical
                </span>
                <br />
                @maxwogenofficial
              </h1>
            </div>
            <div className="socialAcc_rightDivLinksLayerCard">
              <a href="#" className="socialAcc_rightDivLinksLayerCardLogo">
                <FaYoutube />
              </a>
              <h1 className="socialAcc_rightDivLinksLayerCardText">
                <span className="socialAcc_rightDivLinksLayerCardSpan">
                  Max Wogen Officical
                </span>
                <br />
                @maxwogenofficial
              </h1>
            </div>
          </div>
          <div className="socialAcc_rightDivLinksLayer">
            <div className="socialAcc_rightDivLinksLayerCard">
              <a href="#" className="socialAcc_rightDivLinksLayerCardLogo">
                <FaYoutube />
              </a>
              <h1 className="socialAcc_rightDivLinksLayerCardText">
                <span className="socialAcc_rightDivLinksLayerCardSpan">
                  Max Wogen Officical
                </span>
                <br />
                @maxwogenofficial
              </h1>
            </div>
            <div className="socialAcc_rightDivLinksLayerCard">
              <a href="#" className="socialAcc_rightDivLinksLayerCardLogo">
                <FaYoutube />
              </a>
              <h1 className="socialAcc_rightDivLinksLayerCardText">
                <span className="socialAcc_rightDivLinksLayerCardSpan">
                  Max Wogen Officical
                </span>
                <br />
                @maxwogenofficial
              </h1>
            </div>
          </div>
          <div className="socialAcc_rightDivLinksLayer">
            <div className="socialAcc_rightDivLinksLayerCard">
              <a href="#" className="socialAcc_rightDivLinksLayerCardLogo">
                <FaYoutube />
              </a>
              <h1 className="socialAcc_rightDivLinksLayerCardText">
                <span className="socialAcc_rightDivLinksLayerCardSpan">
                  Max Wogen Officical
                </span>
                <br />
                @maxwogenofficial
              </h1>
            </div>
            <div className="socialAcc_rightDivLinksLayerCard">
              <a href="#" className="socialAcc_rightDivLinksLayerCardLogo">
                <FaYoutube />
              </a>
              <h1 className="socialAcc_rightDivLinksLayerCardText">
                <span className="socialAcc_rightDivLinksLayerCardSpan">
                  Max Wogen Officical
                </span>
                <br />
                @maxwogenofficial
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
