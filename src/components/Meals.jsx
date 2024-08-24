import Error from "./Error";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {};
function Meals() {
  const { data, error, loading } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (loading) {
    return <p className="center">loading data please waite</p>;
  }

  if (error) {
    return <Error title={"failed to fetch meals"} message={error.message} />;
  }

  return (
    <ul id="meals">
      {data.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
