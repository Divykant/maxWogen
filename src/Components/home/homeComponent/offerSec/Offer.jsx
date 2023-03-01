import React from "react";
import "./Offer.css";
import iconNO from "../../../../assets/icon-11-1.png";

export default function Offer() {
  return (
    <>
      <div className="offer">
        <div className="offer_leftDiv">
          <h3 className="offer_leftDivTitle">What We Offer</h3>
          <h1 className="offer_leftDivHeading strokeHeading">
            Have fun together
          </h1>
          <p className="offer_leftDivPara">
            Congue mauris rhoncus aenean vel elit scelerisque mauris
            pellentesque elit ullamcorper dignissim cras tincidunt lobortis
            feugiat vivamus at.
          </p>

          <div className="offer_leftDivCard">
            <img src={iconNO} alt="01" className="offer_leftDivCardImg" />
            <p className="offer_leftDivCardPara">
              <span className="offer_leftDivCardParaSpan">
                EXPERIENCE & KNOWLEDGE
              </span>
              <br />
              <br />
              Euismod elementum nisi quis eleifend quam adipiscing. Pellentesque
              pulvinar pellentesque habitant morbi.
            </p>
          </div>
          <div className="offer_leftDivCard">
            <img
              src="img/icon-11-1.png"
              alt="01"
              className="offer_leftDivCardImg"
            />
            <p className="offer_leftDivCardPara">
              <span className="offer_leftDivCardParaSpan">
                EXPERIENCE & KNOWLEDGE
              </span>
              <br />
              <br />
              Euismod elementum nisi quis eleifend quam adipiscing. Pellentesque
              pulvinar pellentesque habitant morbi.
            </p>
          </div>
          <div className="offer_leftDivCard">
            <img
              src="img/icon-11-1.png"
              alt="01"
              className="offer_leftDivCardImg"
            />
            <p className="offer_leftDivCardPara">
              <span className="offer_leftDivCardParaSpan">
                EXPERIENCE & KNOWLEDGE
              </span>
              <br />
              <br />
              Euismod elementum nisi quis eleifend quam adipiscing. Pellentesque
              pulvinar pellentesque habitant morbi.
            </p>
          </div>
        </div>

        <div className="offer_rightDiv">
          <img
            src="img/photo-5.png"
            alt="man_img"
            className="offer_rightDivImg"
          />
        </div>
      </div>
    </>
  );
}
