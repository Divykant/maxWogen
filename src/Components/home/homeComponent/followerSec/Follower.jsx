import React from "react";
import "./Follower.css";
import MapImg from "../../../../assets/map.png";

export default function Follower() {
  return (
    <>
      <div className="follower">
        <div className="follower_topDiv">
          <h2 className="follower_topDivTitle">
            1,000,000+ Follower & Subscriber's
          </h2>
          <h1 className="follower_topDivHeading strokeHeading">
            MILLIONS OF PEOPLE HAVE WATCHED ME
          </h1>
        </div>
        <div className="follower_bottomDiv">
          <img src={MapImg} alt="Map_Img" className="follower_bottomDivImg" />
        </div>
      </div>
    </>
  );
}
