import React from "react";

import { connect } from "react-redux";
// import { filterProducts, removeItem } from "../../store/Products";
// import { reactivate } from "../../store/Categories";
import {add} from "../../store/Cart";

import CancelIcon from '@mui/icons-material/Cancel';

import './Cart.scss'

function Cart(props) {
  return (
    <>
    <ul className="Cart">
        {props.cart.cartProducts.map((item, idx) => {
            return(
                <li className="list" key={idx}>{item.name}    <CancelIcon className="red-circle-button"/></li>
            )
        })}
    </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
});
// const mapDispatchToProps = { };

export default connect(mapStateToProps)(Cart);