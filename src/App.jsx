import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
// import './App.css'

function App() {

  return (
    <>
    <Header/>
    <NavBar/>
    <Categories/>
    <Products/>
    <Footer/>
    </>
  )
}

export default App
