import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const MealItem = ({ meal }) => {
  return (
    <Zoom>
      <div className="card m-2 mx-auto" style={{ width: '15rem' }}>
        <img
          src={meal.strMealThumb}
          alt="meal"
          className="img-fluid card-img-top"
        />
        <div className="card-body">
          <p className="lead text-truncate">
            <strong>{meal.strMeal}</strong>
          </p>
          <p>
            <small className="badge badge-primary">{meal.strCategory}</small>
            <small className="badge badge-primary mx-2">
              {meal.strArea}
            </small>{' '}
          </p>

          <Link
            to={`/meals/${meal.strMeal}`}
            className="btn btn-dark btn-block"
          >
            Cook
          </Link>
        </div>
      </div>
    </Zoom>
  );
};

export default MealItem;
