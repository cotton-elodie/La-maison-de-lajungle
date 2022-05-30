import React from 'react';
import '../Components/App.css';
import Banner from './Banner/Banner';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';
import ShoppingList from './ShoppingList/ShoppingList';



function App() {
  return (
    <div className="App">
      <Banner/>
      <Cart/>
      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default App;
