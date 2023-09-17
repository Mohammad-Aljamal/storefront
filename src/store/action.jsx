import superagent from 'superagent';
const actegoriesAPI = "https://fakestoreapi.com/products/categories";
const productsAPI= "https://fakestoreapi.com/products";


//////////////////////////////////////////////Categories/////////////////////////
const getCategories = (payload) => {
    return {
        type: 'GETCATEGORIES',
        payload: payload
    }
}

export const getNewCategories = () => (dispatch) => {
    return superagent.get(actegoriesAPI)
        .then((data)=> {
            dispatch(getCategories(JSON.parse(data.text)))
        })
}


//////////////////////////////////////////////Products/////////////////////////
const getProducts = (payload) => {
    return {
        type: 'GETPRODUCTS',
        payload: payload
    }
}

export const getNewProducts = () => (dispatch) => {
    return superagent.get(productsAPI)
        .then((data)=> {
            dispatch(getProducts(data.body))
        })
}

