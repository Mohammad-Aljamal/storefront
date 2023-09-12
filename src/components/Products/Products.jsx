import React from "react";

import { connect } from "react-redux";
import { filterProducts } from "../../store/Products";
import { reactivate } from "../../store/Categories";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Products(props) {
  // const filteredProducts = props.products.products.filter(
  //     (product) => product.categoryAssociation === props.categoriesactiveCategory)

  return (
    <>
      {/* {props.filterProducts(props.categories.activeCategory)} */}
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
                </CardContent>
                <CardActions>
                  <Button size="small">ADD TO CART</Button>
                  <Button size="small">VIEW ALL DETAILS</Button>
                </CardActions>
              </Card>
          );
        }
      })}
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
});
const mapDispatchToProps = { filterProducts, reactivate };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
