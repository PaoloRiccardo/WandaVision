import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img className="logo-img" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to={"/category/movie"}
              className={
                activeLink === "movie" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("movie")}
            >
              Movies
            </NavLink>
            <NavLink
              to={"/series/tv"}
              className={
                activeLink === "tv" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("tv")}
            >
              Tv Series
            </NavLink>
            <NavLink
              to={"/category/person"}
              className={
                activeLink === "person" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("person")}
            >
              Actors
            </NavLink>
          </Nav>
          <span className="navbar-text"></span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
