import React from "react";
import "./Story.css";

export default function story() {
  return (
    <div className="story">
      <div className="story_leftDiv">
        <h3 className="story_leftDivTitle">Story--</h3>
        <h1 className="story_leftDivHeading strokeHeading">HI BROTHER'S</h1>
        <h5 className="story_leftDivPara">
          Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque
          elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
          Proin sed libero enim sed faucibus turpis in eu mi. Neque viverra
          justo nec. <br />
          Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit
          amet. Nisl pretium fusce id velit ut tortor. Purus sit amet volutpat
          consequat mauris nunc congue. Morbi tincidunt augue interdum velit
          euismod in.
        </h5>
      </div>
      <div className="story_rightDiv">
        <h2 className="story_rightDivPara1">
          “Arcu odio ut sem nulla pharetra diam. Varius vel pharetra vel turpis.
          Dignissim diam quis enim lobortis scelerisque”.
        </h2>
        <h2 className="story_rightDivPara2">
          Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque
          elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
        </h2>
      </div>
    </div>
  );
}
