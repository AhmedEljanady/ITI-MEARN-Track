import React from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
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
            <Link to="/login" className="navLink ms-5">
              Login
            </Link>
          </Navbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
