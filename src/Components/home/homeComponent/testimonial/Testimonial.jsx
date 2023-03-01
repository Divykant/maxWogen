import React from "react";
import "./Testimonial.css";
import Img1 from "../../../../assets/testimonial-1.jpg";

export default function Testimonial() {
  const TestimonialData = [
    {
      id: 1,
      thumbImg: Img1,
      title: "Fisrt LastNAme",
      para: "Auctor  ",
    },
    {
      id: 2,
      thumbImg: Img1,
      title: "Fisrt LastNAme",
      para: "Auctor  ",
    },
    {
      id: 3,
      thumbImg: Img1,
      title: "Fisrt LastNAme",
      para: "Auctor  ",
    },
    {
      id: 4,
      thumbImg: Img1,
      title: "Fisrt LastNAme",
      para: "Auctor  ",
    },
  ];

  return (
    <>
      <div className="testimonial_topDiv">
        <h2 className="testimonial_topDivTitle">Thanks for Support</h2>
        <h1 className="testimonial_topDivHeading strokeHeading">
          TESTIMONIAL & PARTNER
        </h1>
      </div>

      <div className="testimonial_layerDiv">
        {TestimonialData.map((data) => (
          <div className="testimonial_layerDivCard">
            <p className="testimonial_layerDivCardPara">
              Bibendum at varius vel pharetra vel quis hendrerit dolor magna
              eget est quis eros donec ac.
            </p>
            <div className="testimonial_layerDivCardDetails">
              <img
                src={Img1}
                alt="man_img"
                className="testimonial_layerDivCardDetailsImg"
              />
              <p className="testimonial_layerDivCardDetailsPara">
                <span className="testimonial_layerDivCardDetailsParaSpan">
                  {data.title}
                </span>
                <br />
                {data.para}
              </p>
            </div>
          </div>
        ))}

        {/* <div className="testimonial_layerDivCard">
          <p className="testimonial_layerDivCardPara">
            Bibendum at varius vel pharetra vel quis hendrerit dolor magna eget
            est quis eros donec ac.
          </p>
          <div className="testimonial_layerDivCardDetails">
            <img
              src="img/testimonial-1.jpg"
              alt="man_img"
              className="testimonial_layerDivCardDetailsImg"
            />
            <p className="testimonial_layerDivCardDetailsPara">
              <span className="testimonial_layerDivCardDetailsParaSpan">
                Colleyn Edward
              </span>
              <br />
              Entrepreneur
            </p>
          </div>
        </div>
        <div className="testimonial_layerDivCard">
          <p className="testimonial_layerDivCardPara">
            Bibendum at varius vel pharetra vel quis hendrerit dolor magna eget
            est quis eros donec ac.
          </p>
          <div className="testimonial_layerDivCardDetails">
            <img
              src="img/testimonial-1.jpg"
              alt="man_img"
              className="testimonial_layerDivCardDetailsImg"
            />
            <p className="testimonial_layerDivCardDetailsPara">
              <span className="testimonial_layerDivCardDetailsParaSpan">
                Colleyn Edward
              </span>
              <br />
              Entrepreneur
            </p>
          </div>
        </div>
        <div className="testimonial_layerDivCard">
          <p className="testimonial_layerDivCardPara">
            Bibendum at varius vel pharetra vel quis hendrerit dolor magna eget
            est quis eros donec ac.
          </p>
          <div className="testimonial_layerDivCardDetails">
            <img
              src="img/testimonial-1.jpg"
              alt="man_img"
              className="testimonial_layerDivCardDetailsImg"
            />
            <p className="testimonial_layerDivCardDetailsPara">
              <span className="testimonial_layerDivCardDetailsParaSpan">
                Colleyn Edward
              </span>
              <br />
              Entrepreneur
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
