import React from "react";
import "./PromoCard.css";

export default function PromoCard(props) {
  return (
    <div className="promoCard">
      <h1 className="promoCard_number">{props.number}</h1>
      <img src={props.img} alt="img" className="promoCard_img" />
      <div className="promoCard_TextDiv">
        <h1 className="promoCard_TextDivHeading">{props.heading} </h1>
        <h3 className="promoCard_TextDivTitle">{props.title}</h3>
        <button className="promoCard_TextDivButton">Visit Now</button>
      </div>
      <div className="promoCard_ratingDiv">
        <h1 className="promoCard_ratingDivRating">{props.rating}</h1>
        <h2 className="promoCard_ratingDivView">{props.view} View</h2>
        <h3 className="promoCard_ratingDivLike"> Like : {props.like}</h3>
        <h3 className="promoCard_ratingDivLike"> Comment : {props.comment}</h3>
      </div>
    </div>
  );
}
