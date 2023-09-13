import React from "react";

import { connect } from "react-redux";
import { filterProducts, removeItem } from "../../store/Products";
import { reactivate } from "../../store/Categories";
import { add } from "../../store/Cart";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Products(props) {

  function addToCart(item){
    props.add(item);
    props.removeItem(item)
  }

  return (
    <>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {props.products.products.map((item, idx) => {
        if (item.categoryAssociation == props.categories.activeCategory) 
        {
          return (
              <Card key={idx} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="h6">Price: {item.price} JD</Typography>
                  <Typography variant="body2" color="text.secondary">
                    item: {item.inventoryCount}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick = {()=> addToCart(item)}>ADD TO CART</Button>
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
const mapDispatchToProps = { filterProducts, reactivate, add, removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
