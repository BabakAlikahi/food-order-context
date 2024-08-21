import React, { useEffect } from "react";

function Meals() {
  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if (!response.ok) {
    }
    const resData = await response.json();
  }
  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      <li></li>
    </ul>
  );
}

export default Meals;
