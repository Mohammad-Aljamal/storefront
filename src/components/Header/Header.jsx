import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.sass';
function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <b> <Navbar.Brand href="#home">OUR STORE</Navbar.Brand></b>
          <Nav className="me-auto">
           <Nav.Link href="#home">Cart(0)</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
