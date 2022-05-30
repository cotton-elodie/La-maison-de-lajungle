import React from "react";
import CareScale from "../CareScale/CareScale";
import "../ShoppingList/plantItem.scss"

const PlantItem = (props) => {
  function handleClick(){
      alert (`Vous voulez acheter 1 ${props.name}? Très bon choix 🌱✨`)
  };

  return (
    

    <li key={props.id} className="plantItem" 
    onClick={()=>handleClick(props.name)} 
    >
      <img src={props.cover} alt={props.name} className="plantItem-cover"/>
      {props.name}
      <div>
        <CareScale careType="water " scaleValue={props.water} />
        <CareScale careType="light" scaleValue={props.light} />
      </div>
    </li>
  );
};

export default PlantItem;
