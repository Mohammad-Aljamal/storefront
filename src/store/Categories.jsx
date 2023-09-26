import { createSlice } from "@reduxjs/toolkit";

const storeCategories = createSlice ({
    name: 'categories',
    initialState: {
        categories: [],
        activeCategory: ""
    },

    reducers: {

        reactivate(state,action) {
            let newActive = state.categories.find((categorie) => {
                if (categorie.name == action.payload) {
                    return categorie.name;
                }
                });
                return {
                    categories: state.categories,
                    activeCategory: newActive.name,
                    // ...state,
                    // activeCategory: action.payload
                };
        },

        getCategories(state,action){
            action.payload.map((item) => {
                if(!state.categories.some(category => category.name === item)){
                    state.categories.push({name: item, displayName: item});
                }
            })
            console.log("categories",state.categories)
            return state;
        }
    }
})

export const getNewCategories = () => async(dispatch,state) => {
    let categoriesFromAPI = await fetch("https://fakestoreapi.com/products/categories");
    let categoriesData = await categoriesFromAPI.json();
    dispatch(getCategories(categoriesData))
}

export const { reactivate, getCategories} = storeCategories.actions;
export default storeCategories.reducer;





// let initialState = {
//     categories: [
//         {
//             name: "electronics",
//             displayName: "electronics",
//             description: "Electronic and electrical equipment",
//         },
//         {
//             name: "pet food",
//             displayName: "pet food",
//             description: "Food for pets such as dogs and cats",
//         },
//     ],
//     activeCategory: "",
// };

// export default (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case "REACTIVATE":
//             let newActive = state.categories.find((categorie) => {
//             if (categorie.name == payload) {
//                 return categorie.name;
//             }
//             });
//             return {
//                 categories: state.categories,
//                 activeCategory: newActive.name,
//                 // ...state,
//                 // activeCategory: payload
//             };

//         case 'GETCATEGORIES':
//             payload.map((item) => {
//                 if(!state.categories.some(category => category.name === item)){
//                     state.categories.push({name: item, displayName: item});
//                 }
//             })
//             return state;

//         default:
//             return state;
//     }
// };

// //actions

// export const reactivate = (name) => {
//     // console.log("kkk",name)
//     return {
//         type: 'REACTIVATE',
//         payload: name
//     }
// }