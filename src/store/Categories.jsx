let initialState = {
    categories: [
        {
            name: "Electronics",
            displayName: "Electronics",
            description: "Electronic and electrical equipment",
        },
        {
            name: "Pet Food",
            displayName: "Pet Food",
            description: "Food for pets such as dogs and cats",
        },
    ],
    activeCategory: "",
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "REACTIVATE":
            console.log("reactivate", payload)
            let newActive = state.categories.find((categorie) => {
            if (categorie.name == payload) {
                console.log("if",categorie.name)
                return categorie.name;
            }
            });
            console.log("newActive",newActive)
            return {
                categories: state.categories,
                activeCategory: newActive.name,
                // ...state,
                // activeCategory: payload
            };

        default:
            return state;
    }
};

//actions

export const reactivate = (name) => {
    console.log("kkk",name)
    return {
        type: 'REACTIVATE',
        payload: name
    }
}