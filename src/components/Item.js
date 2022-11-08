import React, {useState} from "react";

function Item({ name, category }) {
  const [notInCart, setCart] = useState(true);

  function handleCart(){
    setCart((notInCart) => !notInCart);
  }

  const liClass = notInCart ? "" : "in-cart";


  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{notInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
