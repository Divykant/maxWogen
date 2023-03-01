import React from "react";
import "./Company.css";
import Company1 from "../../../../assets/logo-3-2.png";
import Company2 from "../../../../assets/logo-6-2.png";
import Company3 from "../../../../assets/logo-6-4.png";

export default function Company() {
  const CompanyData = [
    {
      id: 1,
      thumbImg: Company1,
    },
    {
      id: 2,
      thumbImg: Company2,
    },
    {
      id: 3,
      thumbImg: Company3,
    },
    {
      id: 4,
      thumbImg: Company3,
    },
  ];
  return (
    <>
      <div className="company">
        <h1 className="company_topHeading strokeHeading">Support Company</h1>
        <ol className="company_bottamDivList">
          {CompanyData.map((data) => (
            <li className="company_bottamDivListItem">
              <img
                src={data.thumbImg}
                alt="company_img"
                className="company_img"
              />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
