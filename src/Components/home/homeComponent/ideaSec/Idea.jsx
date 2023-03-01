import React from "react";
import "./Idea.css";
import ColorImg from "../../../../assets/icon-16.png";
import ActivityLogo from "../../../../assets/icon-10.png";
export default function Idea() {
  const IdeaData = [
    {
      id: 1,
      thumbImg: ActivityLogo,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
    },
    {
      id: 2,
      thumbImg: ActivityLogo,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
    },
    {
      id: 3,
      thumbImg: ActivityLogo,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
    },
    {
      id: 4,
      thumbImg: ActivityLogo,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
    },
    {
      id: 5,
      thumbImg: ActivityLogo,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
    },
    {
      id: 6,
      thumbImg: ActivityLogo,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
    },
  ];

  return (
    <div>
      {/* style={style_margin} */}
      <div className="idea_topDiv">
        <h3 className="idea_topDivTitle">Content provided</h3>
        <h1 className="idea_topDivHeading strokeHeading">
          everything begin with idea
        </h1>
      </div>
      <div className="idea">
        <div className="idea_leftDiv">
          {/* <img src={ColorImg} className="idea_rightDivCardColorClip" /> */}

          <img
            src="img/photo-6-1.png"
            alt="man_img"
            className="idea_leftDivImg"
          />
        </div>

        <div className="idea_rightDiv">
          <div className="idea_rightDivLayer">
            {IdeaData.map((data) => (
              <div className="idea_rightDivCard">
                <img
                  src={data.thumbImg}
                  alt="game_logo"
                  className="idea_rightDivCardImg"
                />
                <h3 className="idea_rightDivCardHeading">{data.title}</h3>
                <p className="idea_rightDivCardPara">{data.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
