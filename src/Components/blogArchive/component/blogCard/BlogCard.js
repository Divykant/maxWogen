import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <div className="blogCard">
      <div className="blogCard_topDiv">
        <img
          src={props.img}
          alt="blog_thumbnail"
          className="blogCard_topDivImg"
        />
      </div>
      <div className="blogCard_bottomDiv">
        <h1 className="blogCard_bottomDivTitle">{props.title}</h1>
        <h3 className="blogCard_bottomDivPara">{props.para}</h3>
        <Link to={props.link} className="blogCard_bottomDivLink">
          Read More
        </Link>
        <hr className="blogCard_bottomDivLine" />
        <div className="blogCard_bottomDivFooter">
          <h2 className="blogCard_bottomDivFooterText">
            hendrik - June 16, 2022 - No Comments
          </h2>
        </div>
      </div>
    </div>
  );
}
