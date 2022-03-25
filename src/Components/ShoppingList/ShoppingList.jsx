import React from 'react';
import  {plantList} from '../../datas/plantList';
import CareScale from '../CareScale/CareScale';

import '../ShoppingList/shoppingList.scss'

function ShoppingList() {
   
    const categories = plantList.reduce(
        (acc,plant)=>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
             []
             )

  return (
    <div className='shoppingList' >
        <ul className='shoppingList-ul' > 
            {categories.map((cat)=>(
                <li key={cat.cat}></li>
            ))}
        </ul>
        <ul className='shoppingList-ul'>
            {plantList.map((plant)=>(
                <li className='shoppingList-li' key={plant.id}>
                {plant.name}
                {plant.isBestSale ? <span>🔥</span> : <span></span>}
                {plant.isSpecialOffer && <div className='shoppingList-sales'>Soldes</div>}
                <CareScale careType="water "scaleValue={plant.water}/>
                <CareScale careType= 'light' scaleValue={plant.light}/>
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default ShoppingList;