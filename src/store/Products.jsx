let initialState = {
    products: [
        {
            categoryAssociation: "electronics",
            name: "IPHONE 14 PRO MAX",
            description: "The iPhone 14 Pro Max is Apple's flagship smartphone with advanced features, exceptional camera capabilities, and a large OLED display",
            price: 950,
            inventoryCount: 50,
            image: "https://phonatech.shop/cdn/shop/products/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_720x720.jpg?v=1665087736"
        },
        {
            categoryAssociation: "electronics",
            name: "SAMSUNG GALAXY Z FOLD",
            description: "The Samsung Galaxy Z Fold is a premium foldable smartphone with a large folding AMOLED display, offering versatile multitasking and an innovative design.",
            price: 800,
            inventoryCount: 120,
            image: "https://phonatech.shop/cdn/shop/products/ghgh_720x720.jpg?v=1668291515"
        },
        {
            categoryAssociation: "electronics",
            name: "IPHONE 13 PRO MAX",
            description: "The iPhone 13 Pro Max is Apple's flagship smartphone with advanced features, exceptional camera capabilities, and a large OLED display",
            price: 850,
            inventoryCount: 70,
            image: "https://phonatech.shop/cdn/shop/products/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_720x720.jpg?v=1665087736"
        },
        {
            categoryAssociation: "pet food",
            name: "Fancy Feast",
            description: "Gravy Lovers Poultry & Beef Feast Variety Pack Canned Cat Food.",
            price: 15,
            inventoryCount: 30,
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--9_k_9yiU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/77nywqqezh20j5u78odi.jpg"
        },
        {
            categoryAssociation: "pet food",
            name: "Merrick",
            description: "Real Texas Beef + Sweet Potato Recipe Grain-Free Chicken-Free Adult Dry Dog Food",
            price: 40,
            inventoryCount: 45,
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--9_k_9yiU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/77nywqqezh20j5u78odi.jpg"
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
        
        case 'REMOVEITEMTOCART':

            let itemLoad = payload.cartProducts.find((item) => item.name==payload.item.name)
            if(itemLoad){
                return state
            }

            let newItem = state.products.map((item) => {
                if(item.name == payload.item.name){
                    // con
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

        case "ADDITEMTOCART":
            let newProducts = state.products.map((item) => {
                if(item.name == payload.name){
                    // con
                    return{
                        ...item,
                        inventoryCount: item.inventoryCount + 1
                    }
                } else {
                    return item;
                }
            })
            return{
                products: newProducts
            }

        case 'GETPRODUCTS':
            

        default: 
            return state;   
    }
}


// actions

export const filterProducts = (categoryAssociation) => {
    return {
        type: 'FILTERPRODUCTS',
        payload: categoryAssociation
    }
}

export const removeItemToCart = (item, cartProducts) => {
    return {
        type: 'REMOVEITEMTOCART',
        payload: {item: item, cartProducts: cartProducts}
    }
}

export const addItemfromCart = (item) => {
    console.log("jirjfrhnfjrbnfjrbj")
    return {
        type: 'ADDITEMTOCART',
        payload: item
    }
}
