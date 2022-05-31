import React, { useState } from 'react';
import '../Components/App.css';
import Banner from './Banner/Banner';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
import ShoppingList from './ShoppingList/ShoppingList';



function App() {
const [cart, updateCart]=useState([]);

  return (
    <div className="App">
      <Banner/>
      <div>
      <Cart cart={cart} updateCart={updateCart}/>
      <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
