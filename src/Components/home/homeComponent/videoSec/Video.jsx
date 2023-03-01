import React from "react";
import "./Video.css";
import DanceVid from "../../../../assets/vid-1.mp4";
import SportsVid from "../../../../assets/vidd-2.mp4";
import DroneVid from "../../../../assets/vid-3.mp4";
import VideoImg from "../../../../assets/video-5-1.jpg";
export default function Video() {
  return (
    <>
      <div className="video">
        <div className="video_rightDiv">
          <h3 className="video_rightDivTitle">Weeklky Top -----</h3>
          <h1 className="video_rightDivMainHeading strokeHeading">
            Popular video
          </h1>
          <div className="video_rightDivContent">
            <div className="video_rightDivContentVidDiv">
              <video
                controls
                src={DanceVid}
                alt="vid-preview"
                className="video_rightDivContentVid"
              />
            </div>
            <div className="video_rightDivContentTextDiv">
              <h3 className="video_rightDivContentTextTitle">Sports</h3>
              <h2 className="video_rightDivContentTextHeading">
                Lawins VS Moderior Rare Moments Sport
              </h2>
              <p className="video_rightDivContentTextPara">
                12k views & 30 min
              </p>
            </div>
          </div>

          <div className="video_rightDivContent">
            <div className="video_rightDivContentVidDiv">
              <video
                controls
                src={DroneVid}
                alt="vid-preview"
                className="video_rightDivContentVid"
              />
            </div>
            <div className="video_rightDivContentTextDiv">
              <h3 className="video_rightDivContentTextTitle">Sports</h3>
              <h2 className="video_rightDivContentTextHeading">
                Lawins VS Moderior Rare Moments Sport
              </h2>
              <p className="video_rightDivContentTextPara">
                12k views & 30 min
              </p>
            </div>
          </div>

          <div className="video_rightDivContent">
            <div className="video_rightDivContentVidDiv">
              <video
                controls
                src={SportsVid}
                className="video_rightDivContentVid"
              />
            </div>
            <div className="video_rightDivContentTextDiv">
              <h3 className="video_rightDivContentTextTitle">Sports</h3>
              <h2 className="video_rightDivContentTextHeading">
                Lawins VS Moderior Rare Moments Sport
              </h2>
              <p className="video_rightDivContentTextPara">
                12k views & 30 min
              </p>
            </div>
          </div>
        </div>

        <div className="video_leftDiv">
          <img src={VideoImg} alt="vid_preview" className="video_leftDivVid" />
          <p className="vid_leftDivSpan">(4.6) 10K review </p>
          <h1 className="vid_leftDivHeading">Want to be a content creator ?</h1>
          <p className="vid_leftDivSpan">1 month ago : 12k views : 30 min</p>
          <p className="vid_leftDivSpan">
            Congue mauris rhoncus aenean vel elit scelerisque mauris
            pellentesque elit
            <br /> ullamcorper dignissim cras tincidunt lobortis feugiat vivamus
            at.
          </p>
          <a href="" className="vid_leftDivLink">
            Check Platform{" "}
          </a>
        </div>
      </div>
    </>
  );
}
