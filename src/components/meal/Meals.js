import React from 'react';
import MealItem from './MealItem';
import MealContext from '../../context/meal/mealContext';
import { useContext } from 'react';
import Spinner from '../layout/Spinner';

const Meals = () => {
  const mealContext = useContext(MealContext);

  const { meals, loading } = mealContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="container">
        <div className="row flex-row">
          {meals.map((meal) => (
            <MealItem key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    );
  }
};

export default Meals;
