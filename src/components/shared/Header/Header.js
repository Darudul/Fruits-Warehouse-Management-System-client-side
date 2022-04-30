import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../../Home/Home";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-light" variant="dark">
        <Container>
          <Navbar.Brand className="text-dark h5" href="#home">
            <img src={"https://i.ibb.co/d4LT5cT/fruits-1.png"} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-dark h5 ms-5">
                Home
              </Nav.Link>
              <Nav.Link className="text-dark h5" eventKey={2} href="#memes">
                About us
              </Nav.Link>
              <Nav.Link className="text-dark h5" as={Link} to="/manage">
                Manage Inventories
              </Nav.Link>
              <Nav.Link className="text-dark h5" href="#pricing">
                Contact us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-dark h5" eventKey={2} href="#memes">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
