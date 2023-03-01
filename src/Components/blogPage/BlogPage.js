//Single blog page
import React from "react";
import "./BlogPage.css";
import AboutMe from "../aboutME/Components/AboutMe";
import BlogImg from "../../assets/cover-blog-9.jpg";
import { useParams } from "react-router-dom";
export default function BlogPage() {
  const { id } = useParams();
  console.log(id);
  const Data = [
    {
      id: "01",
      title: 1,
    },
    {
      id: "02",
      title: 2,
    },
    {
      id: "03",
      title: 3,
    },
  ];

  const res = Data.filter((e) => e.id == id);
  console.log(res);
  const re = res[0];
  return (
    <div className="blogPage">
      <AboutMe
        title={re.title}
        spanText="Blog Name"
        headingText="New future will be released"
      />
      <div className="blogPageDiv">
        <img src={BlogImg} alt="Blog_img" className="blogPage_img" />
        <h3 className="blogPag_text">
          hendrik June 16, 2022 7:35 am No Comments{" "}
        </h3>
        <hr />
        <h2 className="blogPage_para">
          Auctor neque vitae tempus quam pellentesque nec nam aliquam sem.
          Turpis egestas pretium aenean pharetra magna ac placerat vestibulum
          lectus. Integer malesuada nunc vel risus commodo viverra maecenas
          accumsan. Morbi tincidunt ornare massa eget egestas.
          <br /> Mattis aliquam faucibus purus in. Id diam vel quam elementum
          pulvinar etiam. Posuere ac ut consequat semper viverra nam. Aliquam
          nulla facilisi cras fermentum. Cursus sit amet dictum sit amet justo
          donec. Nullam ac tortor vitae purus faucibus. Eget mi proin sed libero
          enim. Convallis convallis tellus id interdum velit. Quam vulputate
          dignissim suspendisse in est ante in.
        </h2>
        <hr />
        <h1 className="blogPage_heading">Quotes</h1>
        <h1 className="blogPage_title">
          Pretium aenean pharetra magna ac placerat. Facilisi nullam vehicula
          ipsum a. A condimentum vitae sapien pellentesque habitant morbi
          tristique senectus.ean pharetra magna ac placerat. Facilisi nullam
          vehicula ipsum a.
        </h1>
        <span className="blogPage_spanText">
          {" "}
          . MAX WOGEN – PROFESSIONAL CONTENT CREATORS
        </span>
        <br />
        <h2 className="blogPage_para">
          Cursus sit amet dictum sit amet justo donec. Nullam ac tortor vitae
          purus faucibus. Eget mi proin sed libero enim. Convallis convallis
          tellus id interdum velit. Quam vulputate dignissim suspendisse in est
          ante in.
        </h2>
        <h1 className="blogPage_heading">Introducing</h1>
        <h2 className="blogPage_para">
          Elit scelerisque mauris pellentesque pulvinar. Est ullamcorper eget
          nulla facilisi etiam dignissim diam quis enim. Curabitur gravida arcu
          ac tortor. Laoreet non curabitur gravida arcu ac. Nulla porttitor
          massa id neque aliquam vestibulum morbi blandit. Nunc consequat
          interdum varius sit amet mattis vulputate enim nulla. Sed sed risus
          pretium quam vulputate dignissim. Rhoncus aenean vel elit scelerisque
          mauris pellentesque pulvinar. Vitae semper quis lectus nulla at
          volutpat diam ut venenatis.
        </h2>
        <div className="blogPage_Imglayer">
          <img src={BlogImg} alt="img" className="blogPage_ImglayerCard" />
          <img src={BlogImg} alt="img" className="blogPage_ImglayerCard" />
          <img src={BlogImg} alt="img" className="blogPage_ImglayerCard" />
        </div>
        <h2 className="blogPage_para">
          Avaliable congue nisi vitae suscipit tellus. Magna sit amet purus
          gravida quis blandit turpis. Risus ultricies tristique nulla aliquet
          enim tortor at auctor eu non diam phasellus vestibulum lorem sed eget
          aliquet nibh praesent tristique magna sit amet purus tellus molestie
          nunc non blandit.
          <br /> Quam lacus suspendisse faucibus interdum. Porta lorem mollis
          aliquam ut porttitor leo a diam. Ultrices tincidunt arcu non sodales
          neque. Curabitur gravida arcu ac tortor dignissim. Viverra nam libero
          justo laoreet sit amet cursus sit. Quam viverra orci sagittis eu.
          Sodales ut etiam sit amet nisl purus.
        </h2>
        <h1 className="blogPage_heading">content</h1>
        <h2 className="blogPage_para">
          Risus quis varius quam quisque id diam vel. Id diam vel quam elementum
          pulvinar. Commodo sed egestas egestas fringilla phasellus faucibus.
          Consequat interdum varius sit amet mattis. Viverra nullam ac. Tellus
          molestie nunc non blandit massa enim. Vitae ultricies leo integer
          malesuada nunc vel.
          <br /> Diam vulputate ut pharetra sit amet aliquam id. Ac tincidunt
          vitae semper quis. Tempus imperdiet nulla malesuada pellentesque elit
          eget gravida cum. Semper auctor neque vitae tempus. Aliquam id diam
          maecenas ultricies mi eget mauris pharetra. Risus at ultrices mi
          tempus imperdiet nulla malesuada. At volutpat diam ut venenatis. Ac
          tincidunt vitae semper quis lectus nulla.
        </h2>
        <hr />
        <div className="blogPage_shareDiv">
          <h3 className="blogPage_shareDivHeading">Share this post : </h3>
          <div className="blogPage_shareDivButtonDiv">
            <button className="blogPage_shareDivButton">F facebook</button>
            <button className="blogPage_shareDivButton">F facebook</button>
            <button className="blogPage_shareDivButton">F facebook</button>
          </div>
        </div>
        <hr />
        <div className="blogPage_replyDiv">
          <h1 className="blogPage_replyDivHeading">Leave a Reply</h1>
          <h2 className="blogPage_para">
            Your email address will not be published. Required fields are marked
            *
          </h2>
          <h2 className="blogPage_replyDivTag">Comment*</h2>
          <br />
          <input className="blogPage_replyDivTagInput"></input>
          <h2 className="blogPage_replyDivTag">Comment*</h2>
          <br />
          <input className="blogPage_replyDivTagInput"></input>
          <h2 className="blogPage_replyDivTag">Comment*</h2>
          <br />
          <input className="blogPage_replyDivTagInput"></input>
          <h2 className="blogPage_replyDivTag">Comment*</h2>
          <br />
          <input className="blogPage_replyDivTagInput"></input>
          <h2 className="blogPage_replyDivTag">Comment*</h2>
          <br />
          <input className="blogPage_replyDivTagInput"></input>
        </div>
        <h2 className="blogPage_para">
          Save my name, email, and website in this browser for the next time I
          comment
        </h2>
        <button className="blogPage_replyDivButtoon">post Comment</button>
      </div>
    </div>
  );
}
