import React, { useState } from "react";
import items from "../data.json";
import Item from "./Item";

const Items = () => {
  return (
    <div className="items-container padding spacing">
      {items.map((item, index) => (
        <Item key={index} item={item} index={index} />
      ))}
     </div>
  );
};

export default Items;
