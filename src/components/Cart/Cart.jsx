import React, { useEffect } from "react";

import { connect } from "react-redux";
import { addItemfromCart } from "../../store/Products";
// import { reactivate } from "../../store/Categories";
import {removeFromCart} from "../../store/Cart";

import CancelIcon from '@mui/icons-material/Cancel';

import './Cart.scss'

function Cart(props) {

  function removefromcart (item){
    props.removeFromCart(item);
    props.addItemfromCart(item);
  }
  return (
    <>
    <ul className="Cart">
        {props.cart.cartProducts.map((item, idx) => {
            return(
                <li className="list" key={idx}>{item.name}    
                <CancelIcon className="red-circle-button" onClick={()=> removefromcart(item)}/></li>
            )
        })}
    </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
});
const mapDispatchToProps = { removeFromCart, addItemfromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);