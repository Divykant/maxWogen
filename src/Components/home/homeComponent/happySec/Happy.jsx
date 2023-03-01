import React from "react";
import "./Happy.css";
import Pic1 from "../../../../assets/download2.jpg";

export default function Happy() {
  const HappyData = [
    {
      id: 1,
      thumbImg: Pic1,
    },
    {
      id: 2,
      thumbImg: Pic1,
    },
    {
      id: 3,
      thumbImg: Pic1,
    },
    // {
    //   id: 4,
    //   thumbImg: Pic1,
    // },
    // {
    //   id: 5,
    //   thumbImg: Pic1,
    // },
    // {
    //   id: 6,
    //   thumbImg: Pic1,
    // },
  ];
  const HappyData2 = [
    {
      id: 1,
      thumbImg: Pic1,
    },
    {
      id: 2,
      thumbImg: Pic1,
    },
    {
      id: 3,
      thumbImg: Pic1,
    },
    // {
    //   id: 4,
    //   thumbImg: Pic1,
    // },
    // {
    //   id: 5,
    //   thumbImg: Pic1,
    // },
    // {
    //   id: 6,
    //   thumbImg: Pic1,
    // },
  ];

  return (
    <>
      <div className="happy">
        <div className="happy_topDiv">
          <h3 className="happy_topDivTitle">Documentation</h3>
          <h1 className="happy_topDivHeading strokeHeading">HAPPY TOGETHER</h1>
        </div>

        <div className="happy_layerDiv">
          <div className="happy_layerDivCard">
            {HappyData.map((data) => (
              <img
                src={data.thumbImg}
                alt="happy_img"
                className="happy_layerDivCardImg"
              />
            ))}
          </div>
          <div className="happy_layerDivCardText">
            <span className="happy_layerDivCardTextSpan">"</span>
            <br />
            <p className="happy_layerDivCardTextPara">
              Bibendum at varius vel pharetra vel quis hendrerit dolor magna
              eget est quis eros donec ac.
              <br />
              <br />
              Max Wogen
            </p>
            <a href="" className="happy_layerDivCardTextLink">
              Tweet
            </a>
          </div>
        </div>

        <div className="happy_layerDiv">
          <div className="happy_layerDivCardText2">
            <span className="happy_layerDivCardTextSpan2">"</span>
            <br />
            <h4 className="happy_layerDivCardTextHeading">
              Porta non pulvinar neque laoreet suspendisse.
            </h4>
            <p className="happy_layerDivCardTextPara2">
              Mi sit amet mauris commodo quis imperdiet massa sem et tortor.
              <hr />
              Max Wogen
            </p>
          </div>
          <div className="happy_layerDivCard">
            {HappyData.map((data) => (
              <img
                src={data.thumbImg}
                alt="happy_img"
                className="happy_layerDivCardImg"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
