import React from "react";
import { plantList } from "../../datas/plantList";

import "../ShoppingList/shoppingList.scss";
import PlantItem from "./PlantItem";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className="shoppingList">
      <ul className="shoppingList-ul">
        {categories.map((cat) => (
          <li key={cat.id}>{cat}</li>
        ))}
      </ul>
      <ul className="shoppingList-ul">
        {plantList.map((plant) => (
          <PlantItem
            key={plant.id}
            id={plant.id}
            cover={plant.cover}
            name={plant.name}
            water={plant.water}
            light={plant.light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
