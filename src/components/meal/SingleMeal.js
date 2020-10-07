import React, { useEffect } from 'react';
import { useContext } from 'react';
import MealContext from '../../context/meal/mealContext';

import { Link } from 'react-router-dom';

const SingleMeal = ({ match }) => {
  const mealContext = useContext(MealContext);

  const { meal, getMeal } = mealContext;

  useEffect(() => {
    getMeal(match.params.food);

    // eslint-disable-next-line
  }, []);

  let ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]} `
      );
    }
  }

  return (
    <div className="row mt-1">
      <div className="container">
        <Link to="/" className="btn btn-outline-dark btn-block btn-sm mb-1">
          Back to Search
        </Link>
        <div className="col-m6-6 text-center">
          <img
            src={meal.strMealThumb}
            alt="Food"
            style={{ width: '350px' }}
            className="rounded img-fluid "
          />
          <h3 className="text-muted">{meal.strMeal}</h3>
          <a
            href={`${meal.strYoutube}`}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-danger btn-block rounded-pills"
          >
            Watch Video <i className="fas fa-play-circle"></i>
          </a>
        </div>
        <div className="col md-6">
          <div>
            <h3>Ingredients</h3>
            {ingredients.map((ingredient, index) => (
              <span className="badge badge-secondary mr-2" key={index}>
                {ingredient}
              </span>
            ))}
          </div>
          <h3 className="mt-3">Instructions</h3>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
