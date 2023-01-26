import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dim vaji",
    description: "Finest egg",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Alu-vorta",
    description: "A bangal specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Shobji",
    description: "Healthy...and green...",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Daal",
    description: "Healthy...and clean...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
