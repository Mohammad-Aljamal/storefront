import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.scss';

import { connect } from "react-redux";
import { filterProducts, removeItemToCart } from "../../store/Products";
import { reactivate } from "../../store/Categories";
import { addToCart } from "../../store/Cart";

function Header(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <b> <Navbar.Brand href="#home">OUR STORE</Navbar.Brand></b>
          <Nav className="me-auto">
           <Nav.Link href="#home">Cart({props.cart.cartItem})</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
  cart: state.cart,
});
const mapDispatchToProps = { filterProducts, reactivate, addToCart, removeItemToCart };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
