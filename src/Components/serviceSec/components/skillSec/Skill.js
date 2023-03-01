import React from "react";
import RightImg from "../../../../assets/photo-11.png";
import "./Skill.css";

export default function Skill() {
  return (
    <div className="skill">
      <div className="skill_leftDiv">
        <h3 className="skill_leftDivTitle">Expertise --</h3>
        <h1 className="skill_leftDivHeading strokeHeading">OUR GReat Skill</h1>
        <h2 className="skill_leftDivPara">
          Quis varius quam quisque id diam. Est velit egestas dui id ornare. Sit
          amet cursus sit amet. Purus ut faucibus pulvinar elementum integer
          enim neque volutpat. Sit amet dictum sit amet justo donec enim diam
          vulputate.
        </h2>
      </div>
      <div className="skill_rightDiv">
        <img src={RightImg} alt="man_img" className="skill_rightImg" />
      </div>
    </div>
  );
}
