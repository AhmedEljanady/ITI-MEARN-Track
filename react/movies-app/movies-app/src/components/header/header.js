import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { langContext } from "../../context/langueges";
const Header = () => {
  const { lang, setLang } = useContext(langContext);
  return (
    <Navbar bg="light" expand="lg" className="w-100">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar className="me-auto">
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink mx-3 " to="/movies">
              Movies
            </Link>
            <Link className="navLink mx-3 " to="/favorites">
              Favorites
            </Link>
            <Link to="/about" className="navLink">
              About
            </Link>
            <Link to="/login" className="navLink mx-5">
              Login
            </Link>
            <button
              className="btn btn-success"
              onClick={() => {
                lang === "ar" ? setLang("en") : setLang("ar");
              }}
            >
              {lang}
            </button>
          </Navbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
