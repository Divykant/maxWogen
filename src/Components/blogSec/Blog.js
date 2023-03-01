import React from "react";
import "./Blog.css";
import BlogImg1 from "../../assets/cover-blog-9.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

export default function Blog() {
  const BlogData = [
    {
      id: 1,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      date: "dd/mm/yyyy",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "01",
    },
    {
      id: 2,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      date: "dd/mm/yyyy",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "02",
    },
    {
      id: 3,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      date: "dd/mm/yyyy",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "03",
    },
    {
      id: 4,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      date: "dd/mm/yyyy",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "04",
    },
    {
      id: 5,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      date: "dd/mm/yyyy",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "05",
    },
    {
      id: 6,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      date: "dd/mm/yyyy",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "06",
    },
  ];
  return (
    <>
      <div className="blog_topDiv">
        <h2 className="blog_topDivTitle">News & Inspired</h2>
        <h1 className="blog_topDivHeading strokeHeading">
          LAtest blog inspirtation
        </h1>
      </div>
      <div className="blog">
        <div className="blog_leftDiv">
          <div className="blog_leftDivLayer">
            {BlogData.map((data) => (
              <div className="blog_leftDivLayerLeft">
                <img
                  src={data.thumbImg}
                  alt="blog_img"
                  className="blog_leftDivLayerImg"
                />
                <div className="blog_leftDivLayertext">
                  <h2 className="blog_leftDivLayerTextHeading">{data.title}</h2>
                  <h4 className="blog_leftDivLayerLeftDate">{data.date}</h4>
                  <h4 className="blog_leftDivLayerLeftPara">{data.para}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="blog_rightDiv">
          <div className="blog_rightDivTop">
            <img
              src="img/photo-3-1.png"
              className="blog_rightDivTopImg"
              alt="man_img"
            />
            <h3 className="blog_rightDivTopTitle">Hello, I am Max Wogen</h3>
            <h6 className="blog_rightDivTopPara">
              Netus et malesuada fames ac turpis egestas aliquet enim at auctor.
            </h6>
          </div>
          <div className="blog_rightDivMid">
            <h3 className="blog_rightDivMidTitle">Newsletters</h3>
            <input
              className="blog_rightDivMidInput"
              placeholder="Email Address..."
            ></input>
          </div>
          <div className="blog_rightDivBottom">
            <h3 className="blog_rightDivBottomHeading">Social Account</h3>
            <ul className="team_layerDivCardLinks">
              <li className="team_layerDivCardLinksList">
                <a href="#" className="team_layerDivCardLinksListTag">
                  <FaFacebookF />
                </a>
              </li>
              <li className="team_layerDivCardLinksList">
                <a href="#" className="team_layerDivCardLinksListTag">
                  <FaInstagram />
                </a>
              </li>
              <li className="team_layerDivCardLinksList">
                <a href="#" className="team_layerDivCardLinksListTag">
                  <FaTwitterSquare />
                </a>
              </li>
              <li className="team_layerDivCardLinksList">
                <a href="#" className="team_layerDivCardLinksListTag">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
