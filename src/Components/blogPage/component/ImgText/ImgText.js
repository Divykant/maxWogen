import React from "react";
import Thumbnail from "../../../../assets/cover-blog-9.jpg";

export default function ImgText() {
  return (
    <div className="imgText">
      <img src={Thumbnail} alt="thumbnail_img" className="imgText_Img" />
      <h2>hendrik June 16, 2022 7:35 am No Comments</h2>
      <hr />
      <h3 className="imgText_para">{PaymentResponse.para1}</h3>
    </div>
  );
}
