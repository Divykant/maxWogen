import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "./Documentation.css";
import SliderImg1 from "../../../../assets/download2.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Documentation() {
  const settings = {
    customPaging: function () {
      return (
        <a className="documentation_thumbDiv">
          <img src={SliderImg1} className="documentation_thumbImg" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="documentation">
      <div className="documentation_topDiv">
        <h2 className="documentation_topDivTitle">Documentation</h2>
        <h1 className="documentation_topDivHeading strokeHeading">
          Happy Together
        </h1>
      </div>
      <div className="documentation_bottomDiv">
        <div className="documentation_bottomDivleftDiv">
          {/* <Slider
            {...settings}
            className="documentation_bottomDivleftDivSlider"
          >
            <div className="documentation_bottomDivleftDivSliderImgDiv">
              <img
                src={SliderImg1}
                className="documentation_bottomDivleftDivSliderImgDivImg"
              />
            </div>
            <div className="documentation_bottomDivleftDivSliderImgDiv">
              <img
                src={SliderImg1}
                className="documentation_bottomDivleftDivSliderImgDivImg"
              />
            </div>
            <div className="documentation_bottomDivleftDivSliderImgDiv">
              <img
                src={SliderImg1}
                className="documentation_bottomDivleftDivSliderImgDivImg"
              />
            </div>
            <div className="documentation_bottomDivleftDivSliderImgDiv">
              <img
                src={SliderImg1}
                className="documentation_bottomDivleftDivSliderImgDivImg"
              />
            </div>
          </Slider> */}
          <Carousel
            showArrows={true}
            thumbWidth={200}
            autoPlay={true}
            // onChange={onChange}
            // onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
          >
            <div>
              <img src={SliderImg1} />
            </div>
            <div>
              <img src={SliderImg1} />
            </div>
            <div>
              <img src={SliderImg1} />
            </div>
            <div>
              <img src={SliderImg1} />
            </div>
          </Carousel>
        </div>
        <div className="documentation_bottomDivrightDiv">
          <div className="documentation_bottomDivrightDivTop">
            <img
              src="img/photo-3-1.png"
              className="documentation_bottomDivrightDivTopImg"
              alt="man_img"
            />
            <h3 className="documentation_bottomDivrightDivTopTitle">
              Hello, I am Max Wogen
            </h3>
            <h6 className="documentation_bottomDivrightDivTopPara">
              Netus et malesuada fames ac turpis egestas aliquet enim at auctor.
            </h6>
          </div>
          <div className="documentation_bottomDivrightDivMiddle">
            <h3 className="documentation_bottomDivrightDivMiddleTitle">"</h3>
            <h6 className="documentation_bottomDivrightDivMiddlePara">
              Netus et malesuada fames ac turpis egestas aliquet enim at auctor.
              <br />
              <span className="documentation_bottomDivrightDivMiddleParaSpan">
                Max Wogen
              </span>
            </h6>
            <button className="documentation_bottomDivrightDivMiddleButton">
              Tweet
            </button>
          </div>
          <div className="documentation_bottomDivrightDivMiddle">
            <h3 className="documentation_bottomDivrightDivMiddleTitle">"</h3>
            <h6 className="documentation_bottomDivrightDivMiddlePara">
              Netus et malesuada fames ac turpis egestas aliquet enim at auctor.
              <br />
              <span className="documentation_bottomDivrightDivMiddleParaSpan">
                Max Wogen
              </span>
            </h6>
            <button className="documentation_bottomDivrightDivMiddleButton">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default class CenterMode extends Component {
//   render() {
//     const settings = {
//       customPaging: function (i) {
//         return (
//           <a>
//             <img src={SliderImg1} />
//           </a>
//         );
//       },
//       dots: true,
//       dotsClass: "slick-dots slick-thumb",
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div className="documentation">
//         {/* <h2>Custom Paging</h2> */}
//         <Slider {...settings} className="documentation_slider">
//           <div className="documentation_sliderImgDiv">
//             <img src={SliderImg1} className="documentation_sliderImgDivImg" />
//           </div>
//           <div className="documentation_sliderImgDiv">
//             <img src={SliderImg1} className="documentation_sliderImgDivImg" />
//           </div>
//           <div className="documentation_sliderImgDiv">
//             <img src={SliderImg1} className="documentation_sliderImgDivImg" />
//           </div>
//           <div className="documentation_sliderImgDiv">
//             <img src={SliderImg1} className="documentation_sliderImgDivImg" />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
