import { useContext } from "react";

import { currencyFormatter } from "../utility/formatting";

import Button from "./UI/button";
import CartContext from "../store/CartContext";

function MealItem({ meal }) {
  const cartCt = useContext(CartContext);

  function handelAddMealToCart() {
    cartCt.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handelAddMealToCart}>add to cart</Button>
        </p>
      </article>
    </li>
  );
}

export default MealItem;
