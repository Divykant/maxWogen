import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience">
      <div className="experience_topDiv">
        <h2 className="experience_topDivTitle">Why choose us </h2>
        <h1 className="experience_topDivHeading strokeHeading">
          Experience & Expertise
        </h1>
      </div>
      <div className="experience_bottomDiv">
        <div className="experience_bottomDivLayer">
          <div className="experience_bottomDivCardRating">
            <div className="experience_bottomDivCardRatingText">
              <h1 className="experience_bottomDivCardRatingTextHeading">4.6</h1>

              <h2 className="experience_bottomDivCardRatingTextTitle">
                10k REVIEW
              </h2>
              <h5 className="experience_bottomDivCardRatingTextPara">
                Ratting Popularity
              </h5>
            </div>
            <h5 className="experience_bottomDivCardTextPara">
              Mi sit amet mauris commodo quis imperdiet massa. Sem et tortor
              consequat id porta nibh.
            </h5>
          </div>
          <div className="experience_bottomDivCardText">
            <h1 className="experience_bottomDivCardTextHeading">HOw we work</h1>
            <h2 className="experience_bottomDivCardTextTitle">
              Risus at ultrices mi tempus Morbi leo urna molestie.
            </h2>
            <hr />
            <h5 className="experience_bottomDivCardTextPara">i QUOTES TEAM</h5>
          </div>
        </div>
        <div className="experience_bottomDivLayer">
          <div className="experience_bottomDivCardText">
            <h1 className="experience_bottomDivCardTextHeading">HOw we work</h1>
            <h2 className="experience_bottomDivCardTextTitle">
              Risus at ultrices mi tempus Morbi leo urna molestie.
            </h2>
            <h5 className="experience_bottomDivCardTextPara">
              Mi sit amet mauris commodo quis imperdiet massa. Sem et tortor
              consequat id porta nibh.
            </h5>
          </div>
          <div className="experience_bottomDivCardText">
            <h1 className="experience_bottomDivCardTextHeading">HOw we work</h1>
            <h2 className="experience_bottomDivCardTextTitle">
              Risus at ultrices mi tempus Morbi leo urna molestie.
            </h2>
            <h5 className="experience_bottomDivCardTextPara">
              Mi sit amet mauris commodo quis imperdiet massa. Sem et tortor
              consequat id porta nibh.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
