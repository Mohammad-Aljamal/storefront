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
            let newActive = state.categories.map((categorie) => {
            if (categorie.name == payload) {
                return categorie.name;
            }
            });
            return {
                categories: state.categories,
                activeCategory: newActive,
            };

        default:
            return initialState;
    }
};

//actions

export const reactivate = (name) => {
    return {
        type: 'REACTIVATE',
        payload: name
    }
}