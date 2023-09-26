import React from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProductDetails(props) {

    const {id} = useParams();

  return (
    <>
    {props.products.products.filter((card) => card.id == id)
    .map((item,idx)=>(
        <Card key={idx} sx={{ maxWidth: 345 }} className="Card">
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={item.image}
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
            In Stock: {item.inventoryCount}
          </Typography>
        </CardContent>
        <CardActions className="item-button">
          <Button
            size="small"
            onClick={() => addtocart(item, props.cart.cartProducts)}
          >
            ADD TO CART
          </Button>
          <Button size="small">VIEW ALL DETAILS</Button>
        </CardActions>
      </Card>
    ))}



      
    </>
  );
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    products: state.products,
  });
  const mapDispatchToProps = {};
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
  
