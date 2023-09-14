let initialState = {
    cartProducts: [],
    cartItem: 0
  };
  
  export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD":
            let itemLoad = state.cartProducts.find((item) => item.name==payload.name)
            if(itemLoad){
                return state
            }
            if (!state.cartProducts.includes(payload)) {
                state.cartProducts.push(payload);
                state.cartItem = state.cartItem + 1
            }

            return {
                cartProducts: state.cartProducts,
                cartItem: state.cartItem
            }

        default: 
            return {
                cartProducts: state.cartProducts,
                cartItem: state.cartItem
            }
  };
}
  
  export const add = (item) => {
    return {
      type: "ADD",
      payload: item,
    };
  };