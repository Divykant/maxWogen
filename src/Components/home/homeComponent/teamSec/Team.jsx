import React from "react";
import "./Team.css";
import Team1 from "../../../../assets/team-1.png";
import Team2 from "../../../../assets/team-2.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

export default function Team() {
  const TeamData = [
    {
      thumbImg: Team1,
      name: "DEMO",
      title: "Demo_details",
      fbLink: "#",
      instaLink: "#",
      ytLink: "#",
      twitterLink: "#",
    },
    {
      thumbImg: Team1,
      name: "DEMO",
      title: "Demo_details",
      fbLink: "#",
      instaLink: "#",
      ytLink: "#",
      twitterLink: "#",
    },
    {
      thumbImg: Team2,
      name: "DEMO",
      title: "Demo_details",
      fbLink: "#",
      instaLink: "#",
      ytLink: "#",
      twitterLink: "#",
    },
  ];

  return (
    <>
      <div className="team">
        <div className="team_topHeading">
          <h2 className="team_topHeadingTitle"> Professional Team</h2>
          <h1 className="team_topHeadingMain strokeHeading">effective crew</h1>
        </div>

        <div className="team_layerDiv">
          {TeamData.map((data) => (
            <div className="team_layerDivCard">
              <img
                src={data.thumbImg}
                alt="memeber_img"
                className="team_layerDivCardImg"
              />
              <h2 className="team_layerDivCardName">{data.name}</h2>
              <p className="team_layerDivCardPara">{data.title}</p>
              <ul className="team_layerDivCardLinks">
                <li className="team_layerDivCardLinksList">
                  <a
                    href={data.fbLink}
                    className="team_layerDivCardLinksListTag"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="team_layerDivCardLinksList">
                  <a
                    href={data.instaLink}
                    className="team_layerDivCardLinksListTag"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="team_layerDivCardLinksList">
                  <a
                    href={data.twitterLink}
                    className="team_layerDivCardLinksListTag"
                  >
                    <FaTwitterSquare />
                  </a>
                </li>
                <li className="team_layerDivCardLinksList">
                  <a
                    href={data.ytLink}
                    className="team_layerDivCardLinksListTag"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          ))}
          {/* <img
              src={Team1}
              alt="memeber_img"
              className="team_layerDivCardImg"
            />
            <h2 className="team_layerDivCardName">Carryn Zenith</h2>
            <p className="team_layerDivCardPara">Manager / Strategy</p>
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

          <div className="team_layerDivCard">
            <img
              src={Team2}
              alt="memeber_img"
              className="team_layerDivCardImg"
            />
            <h2 className="team_layerDivCardName">Carryn Zenith</h2>
            <p className="team_layerDivCardPara">Manager / Strategy</p>
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

          <div className="team_layerDivCard">
            <img
              src="img/team-3.png"
              alt="memeber_img"
              className="team_layerDivCardImg"
            />
            <h2 className="team_layerDivCardName">Carryn Zenith</h2>
            <p className="team_layerDivCardPara">Manager / Strategy</p>
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
          </div> */}

          <div className="team_layerDivCardNew">
            <img
              src="img/photo-3.png"
              alt="memeber_img"
              className="team_layerDivCardNewImg"
            />
            <h2 className="team_layerDivCardName">
              BECOME <br /> OUR MEMBER
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
