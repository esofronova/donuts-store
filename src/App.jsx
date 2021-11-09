import './style.scss';
import { useState } from 'react';
import { links, buttons, storeItems } from './data';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';
// import ShoppingCart from './components/ShoppingCart';
require('typeface-kaushan-script');

export default function DonutsStore() {

  return (
    <div className="donuts-store">

      <NavBar />
      {/* <ShoppingCart /> */}

      <div className="body position-relative">
        <Home />
        <About />
        <Store />
      </div>
    </div>
  );
};