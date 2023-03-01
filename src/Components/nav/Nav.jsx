import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
export default function Navv() {
  const expand = "lg";
  // const [toggleMenu, setToggleMenu] = useState(false);

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu);
  // };
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", changeWidth);
  // }, []);

  return (
    // <>
    //   <nav className="nav">
    //     <div className="nav_logoDiv">
    //       <a className="nav_logoLink" id="logo_link" href="#">
    //         <span className="nav_logoLinkSpan">MAX</span> Wogen
    //       </a>
    //     </div>

    //     <div className="nav_links">
    //       {(toggleMenu || screenWidth > 500) && (
    //         <ul className="nav_linksList">
    //           <Link to="/">
    //             <li className="nav_linksListItems">Home</li>
    //           </Link>
    //           <Link to="/about">
    //             <li className="nav_linksListItems">About</li>
    //           </Link>
    //           <Link to="/service">
    //             <li className="nav_linksListItems">Service</li>
    //           </Link>
    //           <Link to="/photoGallery">
    //             <li className="nav_linksListItems">Photo Gallery</li>
    //           </Link>
    //           <Link to="/videoGallery">
    //             <li className="nav_linksListItems">Video Gallery</li>
    //           </Link>
    //           <Link to="/contactUs">
    //             <li className="nav_linksListItems">Contact Us</li>
    //           </Link>
    //           <Link to="/blog">
    //             <li className="nav_linksListItems">Blog Archive</li>
    //           </Link>
    //           <Link to="/promotion">
    //             <li className="nav_linksListItems">Promotion</li>
    //           </Link>
    //         </ul>
    //       )}

    //       <button onClick={toggleNav} className="nav_toggleButton">
    //         BTN
    //       </button>
    //     </div>
    //   </nav>
    // </>
    <div>
      <Navbar key={expand} expand={expand} className="mb-3 navv">
        <Container fluid className="nav_container">
          <Navbar.Brand href="#" className="nav_containerLogo">
            <span className="nav_containerLogoSpan">Max</span>
            <span className="nav_containerLogoSpan2">Wogen</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className="nav_toggle"
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="nav_offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="nav_offcanvasTitle"
                id={`offcanvasNavbarLabel-expand-${expand}`}
              >
                Max wogen
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="nav_offcanvasBody">
              <Nav className="justify-content-end flex-grow-1 pe-3 nav_itemsDiv">
                <Link to="/" className="nav_items">
                  Home
                </Link>

                <Link to="/about" className="nav_items">
                  About Us
                </Link>
                <Link to="/service" className="nav_items">
                  Our service
                </Link>
                <Link to="/team" className="nav_items">
                  Our Team
                </Link>
                <Link to="/promotion" className="nav_items">
                  Promotion
                </Link>
                <Link to="/blog" className="nav_items">
                  Blog Archive
                </Link>
                <Link to="/photoGallery" className="nav_items">
                  Photo Gallery
                </Link>
                <Link to="/videoGallery" className="nav_items">
                  Video Gallery
                </Link>
                <Link to="/contactUs " className="nav_items">
                  Contact
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
