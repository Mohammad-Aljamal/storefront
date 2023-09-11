let initialState = {
    products: [
        {
            categoryAssociation: "Electronics",
            name: "iphone 14 pro max",
            description: "The iPhone 14 Pro Max is Apple's flagship smartphone with advanced features, exceptional camera capabilities, and a large OLED display",
            price: 950,
            inventoryCount: 50
        },
        {
            categoryAssociation: "Pet Food",
            name: "Fancy Feast",
            description: "Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food.",
            price: 15,
            inventoryCount: 30
        },
        {
            categoryAssociation: "Pet Food",
            name: "Merrick",
            description: "Real Texas Beef + Sweet Potato Recipe Grain-Free Chicken-Free Adult Dry Dog Food",
            price: 40,
            inventoryCount: 45
        },
    ],
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type){
        case 'FILTERPRODUCTS':
            let filterProducts = state.products.filter((item) => 
            item.categoryAssociation === payload
            )
            return {
                products: filterProducts
            }

        default: 
            return initialState;    
    }
}


// actions

export const filterProducts = (categoryAssociation) => {
    return {
        type: 'FILTERPRODUCTS',
        payload: categoryAssociation
    }

}

