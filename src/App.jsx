import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Route, Routes } from "react-router-dom";

import { connect } from "react-redux";
import { getNewCategories } from "./store/Categories";
import { getNewProducts } from "./store/Products";
// import './App.css'

function App(props) {
  useEffect(() => {
    props.getNewCategories();
    props.getNewProducts();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Categories/>} />
        <Route
          path="/product/:id"
          element={<ProductDetails/>}
        />
      </Routes>
      <Cart />
      <Products />
      
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
});
const mapDispatchToProps = { getNewCategories, getNewProducts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
