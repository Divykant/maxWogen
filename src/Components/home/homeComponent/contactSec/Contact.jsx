import React from "react";
import "./Contact.css";
import LocationImg from "../../../../assets/location.png";
import PhoneImg from "../../../../assets/phone.png";
import EmailImg from "../../../../assets/email.png";
import WebsiteImg from "../../../../assets/website.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_leftDiv">
        <h3 className="contact_leftDivTitle">Get in Touch -</h3>
        <h1 className="contact_leftDivHeading strokeHeading">
          CONTACT WITH ME
        </h1>
        <p className="contact_leftDivPara">
          Sociis natoque penatibus et magnis dis parturient. Viverra orci
          sagittis eu volutpat odio facilisis mauris sit amet. A cras semper
          auctor neque vitae tempus quam pellentesque nec.
        </p>
        <div className="contact_leftDivCards">
          <div className="contact_leftDivCardsLayer">
            <div className="contact_leftDivCardsLayerSec">
              <img
                src="img/location-1.svg"
                alt=""
                className="contact_leftDivCardsLayerSecImg"
              />
              <p className="contact_leftDivCardsLayerSecPara">
                <span className="contact_leftDivCardsLayerSecHeading">
                  AUSTRALIA
                </span>
                <br />
                99 Roving St, Big City PKU
              </p>
            </div>
            <div className="contact_leftDivCardsLayerSec">
              <img
                src={PhoneImg}
                alt=""
                className="contact_leftDivCardsLayerSecImg"
              />
              <p className="contact_leftDivCardsLayerSecPara">
                <span className="contact_leftDivCardsLayerSecHeading">
                  AUSTRALIA
                </span>
                <br />
                99 Roving St, Big City PKU
              </p>
            </div>
          </div>

          <div className="contact_leftDivCardsLayer">
            <div className="contact_leftDivCardsLayerSec">
              <img
                src={EmailImg}
                alt=""
                className="contact_leftDivCardsLayerSecImg"
              />
              <p className="contact_leftDivCardsLayerSecPara">
                <span className="contact_leftDivCardsLayerSecHeading">
                  AUSTRALIA
                </span>
                <br />
                99 Roving St, Big City PKU
              </p>
            </div>
            <div className="contact_leftDivCardsLayerSec">
              <img
                src={WebsiteImg}
                alt=""
                className="contact_leftDivCardsLayerSecImg"
              />
              <p className="contact_leftDivCardsLayerSecPara">
                <span className="contact_leftDivCardsLayerSecHeading">
                  AUSTRALIA
                </span>
                <br />
                99 Roving St, Big City PKU
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_rightDiv">
        <h2 className="contact_rightDivHeading">GET FREE QUOTES NOW !</h2>
        <input
          className="contact_rightDivInput"
          placeholder="Full Name"
        ></input>
        <input className="contact_rightDivInput" placeholder="Country"></input>
        <input className="contact_rightDivInput" placeholder="Email"></input>
        <input className="contact_rightDivInput" placeholder="Message"></input>
        <p className="contact_rightDivCheckPara">I have read the info</p>
        <button className="contact_rightDivSubmitButton">
          Let's Colaborate
        </button>
      </div>
    </div>
  );
}
