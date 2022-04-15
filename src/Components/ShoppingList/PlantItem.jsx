import React from "react";
import CareScale from "../CareScale/CareScale";

const PlantItem = (props) => {
  return (
    <li key={props.id}>
      <img src={props.cover} alt={props.name}/>
        {" "}
        {props.name}
      
      <div>
        <CareScale careType="water " scaleValue={props.water} />
        <CareScale careType="light" scaleValue={props.light} />
      </div>
    </li>
  );
};

export default PlantItem;
