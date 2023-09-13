let initialState = {
    products: [
        {
            categoryAssociation: "Electronics",
            name: "IPHONE 14 PRO MAX",
            description: "The iPhone 14 Pro Max is Apple's flagship smartphone with advanced features, exceptional camera capabilities, and a large OLED display",
            price: 950,
            inventoryCount: 50,
            img: "https://phonatech.shop/cdn/shop/products/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_720x720.jpg?v=1665087736"
        },
        {
            categoryAssociation: "Electronics",
            name: "SAMSUNG GALAXY Z FOLD",
            description: "The Samsung Galaxy Z Fold is a premium foldable smartphone with a large folding AMOLED display, offering versatile multitasking and an innovative design.",
            price: 800,
            inventoryCount: 120,
            img: "https://phonatech.shop/cdn/shop/products/ghgh_720x720.jpg?v=1668291515"
        },
        {
            categoryAssociation: "Pet Food",
            name: "Fancy Feast",
            description: "Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food.",
            price: 15,
            inventoryCount: 30,
            img: "https://res.cloudinary.com/practicaldev/image/fetch/s--9_k_9yiU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/77nywqqezh20j5u78odi.jpg"
        },
        {
            categoryAssociation: "Pet Food",
            name: "Merrick",
            description: "Real Texas Beef + Sweet Potato Recipe Grain-Free Chicken-Free Adult Dry Dog Food",
            price: 40,
            inventoryCount: 45,
            img: "https://res.cloudinary.com/practicaldev/image/fetch/s--9_k_9yiU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/77nywqqezh20j5u78odi.jpg"
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
        
        case 'REMOVEITEM':
            let newItem = state.products.map((item) => {
                if(item.name == payload.name){
                    return{
                        ...item,
                        inventoryCount: item.inventoryCount - 1
                    }
                } else {
                    return item;
                }
            })
            return{
                products: newItem
            }

        default: 
            return {products: state.products}   
    }
}


// actions

export const filterProducts = (categoryAssociation) => {
    return {
        type: 'FILTERPRODUCTS',
        payload: categoryAssociation
    }
}

export const removeItem = (item) => {
    return {
        type: 'REMOVEITEM',
        payload: item
    }
}

