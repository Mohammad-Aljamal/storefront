import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { filterProducts, removeItemToCart } from "../../store/Products";
import { reactivate } from "../../store/Categories";
import { addToCart } from "../../store/Cart";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

function Categories(props) {
  // useEffect (() => {

  //     console.log("useEffect",props)

  // },[active])

  // function active (name){
  //     // e.preventdefault();
  //     // ((name)=> {
  //     //     props.reactivate(name);
  //     // })(name)

  //     console.log("mmm",name);
  //     props.filterProducts(props.categories.activeCategory);
  // }


  return (
    <div>
      <span>
        <h3>Browse our Category</h3>
      </span>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group" className="button-group-container">
          {props.categories.categories.map((categorie, idx) => {
            return (
              <Button
                key={idx}
                className="button-group"
                onClick={() => props.reactivate(categorie.name)}
              >
                {categorie.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>

      <section className="center-column">
        <h3>{props.categories.activeCategory.toUpperCase()}</h3>
      </section>
      <br/>
      <br/>
      {/* <br/> */}

    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
  cart: state.cart,
});
const mapDispatchToProps = { filterProducts, reactivate, addToCart, removeItemToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
// export default Categories;
