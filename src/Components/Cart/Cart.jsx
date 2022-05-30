import React, { useState } from "react";
import "../Cart/cart.scss";

function Cart() {
  const monteraPrice = 8;

  const [cart, setCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="cart">
      <h2 className="cart-title">Panier</h2>
      <div>
        Monstera : {monteraPrice}€
        <button onClick={() => setCart(cart + 1)}>Ajouter</button>
      </div>
      <h3>Total : {monteraPrice + cart}€</h3>
    </div>
  ) : (
    <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
  );
}

export default Cart;
