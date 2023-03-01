import React from "react";
import "./RecentVid.css";
import BlogImg1 from "../../../../assets/cover-blog-9.jpg";

export default function RecentVid() {
  const RecentVidData = [
    {
      id: 1,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      view: "12k & 30 mins",
    },
    {
      id: 2,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      view: "12k & 30 mins",
    },
    {
      id: 3,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      view: "12k & 30 mins",
    },
    {
      id: 4,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      view: "12k & 30 mins",
    },
  ];
  return (
    <div className="recentVid">
      <div className="recentVid_topDiv">
        <h2 className="recentVid_topDivTitle">Video Content</h2>
        <h1 className="recentVid_topDivHeading strokeHeading">Recent Video</h1>
      </div>
      <div className="recentVid_bottomDiv">
        <div className="recentVid_bottomDivLayer">
          {RecentVidData.map((data) => (
            <div className="recentVid_bottomDivLayerCard">
              <img
                src={data.thumbImg}
                alt="blog_img"
                className="recentVid_bottomDivLayerCardImg"
              />
              <div className="recentVid_bottomDivLayerCardTextDiv">
                <h1 className="recentVid_bottomDivLayerCardTextDivHeading">
                  {data.title}
                </h1>
                <h2 className="recentVid_bottomDivLayerCardTextDivPara">
                  {data.para}
                  <br />
                  <br />
                  <span className="recentVid_bottomDivLayerCardTextDivSpan">
                    {data.view}
                  </span>
                </h2>
              </div>
            </div>
          ))}
        </div>
        <button className="recentVid_bottomDivButton">Visit Platform</button>
      </div>
    </div>
  );
}
