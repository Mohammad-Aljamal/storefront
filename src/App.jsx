import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
// import './App.css'

function App() {

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

export default App
