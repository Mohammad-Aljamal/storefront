import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './Categories';
import products from './Products';
import cart from './Cart';

let reducers = combineReducers({
    categories: categories,
    products: products,
    cart: cart
})

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();