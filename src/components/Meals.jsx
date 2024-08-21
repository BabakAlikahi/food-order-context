import React, { useEffect, useState } from "react";

import MealItem from "./MealItem";

function Meals() {
  const [meals, setMeals] = useState([]);

  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if (!response.ok) {
      // ...
    }
    const resData = await response.json();
    setMeals(resData);
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
