import React, { useState } from "react";
import { plantList } from "../../datas/plantList";
import Categories from "../Categories/Categories";

import "../ShoppingList/shoppingList.scss";
import PlantItem from "./PlantItem";

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory]=useState('');
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}


  return (
    <div className="shoppingList">
      
      <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      <ul className="shoppingList-ul">
        {plantList.map((plant) => (
          <div key={plant.id}>
            <PlantItem
              id={plant.id}
              cover={plant.cover}
              name={plant.name}
              water={plant.water}
              light={plant.light}
              price={plant.price}
            />
            <button onClick={() => addToCart(plant.name,plant.price)}>Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
