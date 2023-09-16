import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categories from './Categories';
import products from './Products';
import cart from './Cart';

let reducers = combineReducers({
    categories: categories,
    products: products,
    cart: cart
})

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();