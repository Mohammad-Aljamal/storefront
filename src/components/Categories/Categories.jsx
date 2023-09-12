import React , {useState,useEffect} from "react";

import { connect } from "react-redux";
import { filterProducts } from "../../store/Products";
import { reactivate } from "../../store/Categories";

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
    <div className="nav">
      <div>
        <h3>Browse our Category</h3>
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">
            {/* <section> */}
                { props.categories.categories.map((categorie, idx) => {
                    return(
                        <Button key={idx} onClick={()=> props.reactivate(categorie.name)}>{categorie.name}</Button> //props.reactivate(categorie.name)
                    )
                })}
            {/* </section> */}
        </ButtonGroup>
      </Box>

      <section>
      <h3>{props.categories.activeCategory}</h3>
      </section>

      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
    products: state.products,
    categories: state.categories,
  });
  const mapDispatchToProps = { filterProducts, reactivate };
  

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
// export default Categories;
