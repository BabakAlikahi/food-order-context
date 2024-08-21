import React, { useEffect } from "react";

function Meals() {
  async function fetchMeals() {
    // dev Mood
    // const response = await fetch("http://localhost:3000/meals");
    
    // Product Mood
    const response = await fetch("https://food-order-context-seven.vercel.app/meals");
    if (!response.ok) {
    }
    const resData = await response.json();
    console.log(resData);
}
  useEffect(() => {
    fetchMeals();
    console.log('hiii');
  }, []);

  return (
    <ul id="meals">
      <li></li>
    </ul>
  );
}

export default Meals;
