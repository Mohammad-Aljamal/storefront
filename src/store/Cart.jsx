import { createSlice } from "@reduxjs/toolkit";

const storeCart = createSlice ({
  name:"cart",
  initialState: {
    cartProducts: []
    // cartItem: 0
  },
  reducers: {

    addToCart(state,action){
      // let newAction = Array.from(action.payload)
      let itemLoad = state.cartProducts.find((item) => item.name == action.payload.name)
            if(itemLoad){
                return state
            }
      if (!state.cartProducts.includes(action.payload)) {
            state.cartProducts.push(action.payload);
            state.cartProducts = [...state.cartProducts]
            // state.cartItem = state.cartItem + 1
      }
      console.log("newCartProducts==",state.cartProducts)

      return state;
    },

    removeFromCart(state,action){
      console.log("ENTER TO REMOVE state  ==", state.cartProducts)
      console.log("ENTER TO REMOVE  ==", action.payload)

            let newCartProducts = state.cartProducts.filter((item) => item != action.payload);
            console.log("newCartProducts==",newCartProducts)
            return{
              cartProducts: newCartProducts,
              // cartItem: state.cartItem - 1
            }
    }
  }
})

export const {addToCart, removeFromCart} = storeCart.actions;
export default storeCart.reducer;


// let initialState = {
//     cartProducts: [],
//     cartItem: 0
//   };
  
//   export default (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case "ADD":
//             let itemLoad = state.cartProducts.find((item) => item.name==payload.name)
//             if(itemLoad){
//                 return state
//             }
//             if (!state.cartProducts.includes(payload)) {
//                 state.cartProducts.push(payload);
//                 state.cartItem = state.cartItem + 1
//             }

//             return {
//                 cartProducts: state.cartProducts,
//                 cartItem: state.cartItem
//             }

//         case "REMOVE":
//             console.log("ENTER TO REMOVE  ==", state.cartProducts)
//             let newCartProducts = state.cartProducts.filter((item) => item != payload);
//             console.log("newCartProducts==",newCartProducts)
//             return{
//               cartProducts: newCartProducts,
//               cartItem: state.cartItem - 1
//             }

//         default: 
//             return {
//                 cartProducts: state.cartProducts,
//                 cartItem: state.cartItem
//             }
//   };
// }
  
//   export const addToCart = (item) => {
//     return {
//       type: "ADD",
//       payload: item,
//     };
//   };

//   export const removeFromCart = (item) => {
//     console.log("enter to remove from cart")
//     return {
//       type: "REMOVE",
//       payload: item,
//     };
//   };