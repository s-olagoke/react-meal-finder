import React, { Fragment, useState } from 'react';
import { useContext } from 'react';
import MealContext from '../../context/meal/mealContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const mealContext = useContext(MealContext);

  const alertContext = useContext(AlertContext);

  const { meals, searchMeals, clearMeal } = mealContext;

  const { setAlert } = alertContext;

  const [meal, setMeal] = useState('');

  const onChange = (e) => {
    setMeal(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (meal === '') {
      setAlert('Please enter something', 'danger');
    } else {
      searchMeals(meal);
      setMeal('');
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} className="my-2">
        <div className="d-flex">
          <input
            type="text"
            name="meal"
            value={meal}
            placeholder="Search meals...."
            onChange={onChange}
            className="form-control mr-2"
          />
          <button className="btn btn-outline-dark">Search</button>
        </div>
      </form>
      {meals.length > 0 && (
        <button className="btn btn-secondary btn-block" onClick={clearMeal}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default Search;
