import React from "react";
import "./Work.css";

export default function Header() {
  return (
    <>
      <div className="work">
        <div className="work_layer">
          <div className="work_first">
            <div className="work_firstImg">
              <img
                src="img/icon-1.png"
                alt="icon"
                className="work_firstImgTag"
              />
            </div>
            <div className="work_second">
              <h1 className="work_secondHeading">Creative Video</h1>
              <p className="work_secondPara">Activity & Creativity</p>
            </div>
          </div>

          <div className="work_first">
            <div className="work_firstImg">
              <img
                src="img/icon-4.png"
                alt="icon"
                className="work_firstImgTag"
              />
            </div>
            <div className="work_second">
              <h1 className="work_secondHeading">BLOG INSPIRED</h1>
              <p className="work_secondPara">Experience & Education</p>
            </div>
          </div>
        </div>
        <div className="work_layer">
          <div className="work_first">
            <div className="work_firstImg">
              <img
                src="img/icon-3-1.png"
                alt="icon"
                className="work_firstImgTag"
              />
            </div>
            <div className="work_second">
              <h1 className="work_secondHeading">DOCUMENTATION</h1>
              <p className="work_secondPara">Photo, Sound & Other</p>
            </div>
          </div>

          <div className="work_first">
            <div className="work_firstImg">
              <img
                src="img/icon-2.png"
                alt="icon"
                className="work_firstImgTag"
              />
            </div>
            <div className="work_second">
              <h1 className="work_secondHeading">COLLABORATION</h1>
              <p className="work_secondPara">Activity & Creativity</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
