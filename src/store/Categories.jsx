let initialState = {
    categories: [
        {
            name: "electronics",
            displayName: "electronics",
            description: "Electronic and electrical equipment",
        },
        {
            name: "pet food",
            displayName: "pet food",
            description: "Food for pets such as dogs and cats",
        },
    ],
    activeCategory: "",
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "REACTIVATE":
            let newActive = state.categories.find((categorie) => {
            if (categorie.name == payload) {
                return categorie.name;
            }
            });
            return {
                categories: state.categories,
                activeCategory: newActive.name,
                // ...state,
                // activeCategory: payload
            };

        case 'GETCATEGORIES':
            // let ss = payload.split(",")
            console.log("type",typeof(payload));
            console.log("type",payload);

            // let lll = 
            payload.map((item) => {
                state.categories.push({name: item, displayName: item});
                // return [...state.categories,{name: item, displayName: item}]
            })
            console.log("lll",lll)
            return state;
            // return {
            //     ...state,
            //     categories: lll
            // }

        default:
            return state;
    }
};

//actions

export const reactivate = (name) => {
    // console.log("kkk",name)
    return {
        type: 'REACTIVATE',
        payload: name
    }
}