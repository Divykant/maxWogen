//BlogPAge
import React from "react";
import "./BlogArchive.css";
import AboutMe from "../aboutME/Components/AboutMe";
import Blog from "../blogSec/Blog";
import BlogCard from "./component/blogCard/BlogCard";
import BlogImg1 from "../../assets/cover-blog-9.jpg";
export default function BlogArchive() {
  const BlogArchiveData = [
    {
      id: 1,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "01",
    },
    {
      id: 2,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "02",
    },
    {
      id: 3,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "03",
    },
    {
      id: 4,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "04",
    },
    {
      id: 5,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "05",
    },
    {
      id: 6,
      thumbImg: BlogImg1,
      title: "New Future Will Be Released",
      para: "Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Turpis egestas pretium aenean pharetra magna ac placerat ",
      link: "06",
    },
  ];
  return (
    <div className="blogArchive">
      <AboutMe
        title="Blog Archive"
        spanText="Our news"
        headingText="Blog inspired"
      />
      <div className="blogArchive_topDiv">
        <h2 className="blogArchive_topDivTitle">News & Inspired</h2>
        <h1 className="blogArchive_topDivHeading strokeHeading">
          LATEST BLOG INSPIRATION
        </h1>
      </div>
      <div className="blogArchive_cardLayer">
        {BlogArchiveData.map((data) => (
          <BlogCard
            img={data.thumbImg}
            title={data.title}
            para={data.para}
            link={data.link}
          />
        ))}
      </div>
      <button className="blogArchive_cardLayerButton">View more</button>
    </div>
  );
}
