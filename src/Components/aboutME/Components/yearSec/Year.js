import React from "react";
import "./Year.css";

export default function Year(props) {
  const YearData = [
    {
      thumbImg: "2012",
      name: "DEMO",
      title: "Demo_detailsDemo_detailsDemo_",
      link: "Discover Now >",
    },
    {
      thumbImg: "2015",
      name: "DEMO",
      title: "Demo_Demo_detailsDemo_details",
      link: "Discover Now >",
    },
    {
      thumbImg: "2012",
      name: "DEMO",
      title: "Demo_Demo_detailsDemo_details",
      link: "Discover Now >",
    },
    {
      thumbImg: "2012",
      name: "DEMO",
      title: "Demo_Demo_detailsDemo_details",
      link: "Discover Now >",
    },
  ];
  return (
    <div className="year">
      <div className="year_cardLayer">
        {YearData.map((data) => (
          <div className="year_card">
            <h3 className="year_cardYr">{data.thumbImg}</h3>
            <h1 className="year_cardTitle">{data.name}</h1>
            <h4 className="year_cardPara">{data.title}</h4>
            <h4 className="year_cardPara">{data.para}</h4>
            <h4 className="year_cardPara">
              <a className="year_cardLinks" href="#">
                {data.link}
              </a>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
