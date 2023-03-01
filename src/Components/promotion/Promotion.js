import React from "react";
import AboutMe from "../aboutME/Components/AboutMe";
import PromoCard from "./components/promoCard/PromoCard";
import Img1 from "../../assets/photo-11.png";
export default function Promotion() {
  const PromotionData = [
    {
      id: 1,
      thumbImg: Img1,
      heading: "activities",
      title: "New Future Will",
      rating: "4.8",
      view: "10k",
      like: "13k",
      comment: "2.5k",
    },
    {
      id: 2,
      thumbImg: Img1,
      heading: "activities",
      title: "New Future Will",
      rating: "4.8",
      view: "10k",
      like: "13k",
      comment: "2.5k",
    },
    {
      id: 3,
      thumbImg: Img1,
      heading: "activities",
      title: "New Future Will",
      rating: "4.8",
      view: "10k",
      like: "13k",
      comment: "2.5k",
    },
    {
      id: 4,
      thumbImg: Img1,
      heading: "activities",
      title: "New Future Will",
      rating: "4.8",
      view: "10k",
      like: "13k",
      comment: "2.5k",
    },
    {
      id: 5,
      thumbImg: Img1,
      heading: "activities",
      title: "New Future Will",
      rating: "4.8",
      view: "10k",
      like: "13k",
      comment: "2.5k",
    },
    {
      id: 6,
      thumbImg: Img1,
      heading: "activities",
      title: "New Future Will",
      rating: "4.8",
      view: "10k",
      like: "13k",
      comment: "2.5k",
    },
  ];

  return (
    <div className="promotion">
      <AboutMe
        title="CALL TO ACTION"
        spanText="Promotion"
        headingText="TOGETHER WITH ADVENTURE"
      />
      {PromotionData.map((data) => (
        <PromoCard
          number={data.id}
          img={data.thumbImg}
          heading={data.heading}
          title={data.title}
          rating={data.rating}
          view={data.view}
          like={data.like}
          comment={data.comment}
        />
      ))}
      {/* <PromoCard
        number="01"
        img={Img1}
        heading="activities"
        title="have fun and future"
        rating="4.8"
        view="10k"
        like="13k"
        comment="2.5k"
      />
      <PromoCard
        number="01"
        img={Img1}
        heading="activities"
        title="have fun and future"
        rating="4.8"
        view="10k"
        like="13k"
        comment="2.5k"
      />
      <PromoCard
        number="01"
        img={Img1}
        heading="activities"
        title="have fun and future"
        rating="4.8"
        view="10k"
        like="13k"
        comment="2.5k"
      /> */}
    </div>
  );
}
