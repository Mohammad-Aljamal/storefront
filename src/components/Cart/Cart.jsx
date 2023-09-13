import React from "react";

import { connect } from "react-redux";
import { filterProducts, removeItem } from "../../store/Products";
import { reactivate } from "../../store/Categories";
import {add} from "../../store/Cart";

import './Cart.scss'
function Cart(props) {
  return (
    <>
    <ul className="Cart">
        {props.cart.cartProducts.map((item, idx) => {
            return(
                <li className="list" key={idx}>{item.name}<button className="red-circle-button">X</button></li>
            )
        })}
    </ul>
    
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
  cart: state.cart
});
const mapDispatchToProps = { filterProducts, reactivate, add, removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);