import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

import { connect } from "react-redux";
import {getNewCategories, getNewProducts} from './store/action'
// import './App.css'


function App(props) {

  useEffect (()=> {
    // props.getNewCategories();
    // console.log(props.Categories.categories)
    // console.log(props.getNewCategories());
    // console.log('"""""',props.getNewProducts())
    props.getNewProducts()

  },[])

  return (
    <>
    <Header/>
    <Categories/>
    <Cart/>
    <Products/>
    <Footer/>
    </>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
});
const mapDispatchToProps = { getNewCategories, getNewProducts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
