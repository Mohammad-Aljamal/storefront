import React from "react";

import { connect } from "react-redux";
import { filterProducts, removeItemToCart } from "../../store/Products";
// import { reactivate } from "../../store/Categories";
import { addToCart } from "../../store/Cart";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Products.scss"

function Products(props) {

  function addtocart(item, cartProducts){
    props.removeItemToCart(item,cartProducts)
    props.addToCart(item)
  }

  return (
    <>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {props.products.products.map((item, idx) => {
        if (item.categoryAssociation == props.categories.activeCategory) 
        {
          return (
              <Card key={idx} sx={{ maxWidth: 345 }} className="Card">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={item.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description.substring(0, 120)+ '...'}
                  </Typography>
                  <Typography variant="h6">Price: {item.price} JD</Typography>
                  <Typography variant="body2" color="text.secondary">
                  In Stock: {item.inventoryCount}
                  </Typography>
                </CardContent>
                <CardActions className="item-button">
                  <Button size="small" onClick = {()=> addtocart(item, props.cart.cartProducts)}>ADD TO CART</Button>
                  <Button size="small">VIEW ALL DETAILS</Button>
                </CardActions>
              </Card>
          );
        }
      })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
  cart: state.cart
});
const mapDispatchToProps = { filterProducts, addToCart, removeItemToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
