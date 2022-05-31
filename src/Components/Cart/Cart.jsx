import React, { useState } from "react";
import "../Cart/cart.scss";

function Cart({ cart, updateCart }) {
  const monteraPrice = 8;

  // const [cart, setCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="cart">
      <button className="cart-button" onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      <h2 className="cart-title">Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name} - ${index}`}>
          {name} {price}€ x {amount}
        </div>
      ))}
      <h3>Total : {monteraPrice * cart}€</h3>
      <button onClick={() => updateCart(0)}>Vider le panier</button>
    </div>
  ) : (
    <div className="cart-closed">
      <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    </div>
  );
}

export default Cart;
