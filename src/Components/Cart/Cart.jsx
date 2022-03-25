import React from 'react'
import '../Cart/cart.scss'

function Cart() {
const monteraPrice= 8;
const lierrePrice=10;
const flowerPrice=15




  return (
    <div className='cart' >
        <h2 className='cart-title' >Panier</h2>
            <ul className='cart-ul' >
                {/* <li className='cart-li' >Monstera {monteraPrice}€</li> */}
                
            </ul>
            Total : {monteraPrice + lierrePrice +flowerPrice }€
    </div>
  )
}

export default Cart