import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

  const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if(isLoading){
    return <p>Loading meals...</p>
  }

  if(error){
    return <Error title="Failed to fetch meals." message={error}/>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
