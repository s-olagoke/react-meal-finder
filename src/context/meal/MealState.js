import React, { useReducer } from 'react';
import MealContext from './mealContext';
import MealReducer from './mealReducer';
import axios from 'axios';

import { SEARCH_MEALS, GET_MEAL, CLEAR_MEALS, SET_LOADING } from '../types';

const MealState = (props) => {
  const initialState = {
    meals: [],
    meal: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MealReducer, initialState);

  // SEARCH_MEALS
  const searchMeals = async (food) => {
    setLoading();
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}
      `);
    if (res.data.meals === null) {
      const div = document.createElement('div');
      const icon = document.createElement('i');
      const parent = document.querySelector('#search');
      const form = document.querySelector('form');
      const spinner = document.querySelector('.spinner');

      div.classList.add('alert');
      div.classList.add('alert-danger');
      div.classList.add('mt-2');
      icon.classList.add('fas');
      icon.classList.add('fa-times-circle');

      div.appendChild(icon);

      div.appendChild(
        document.createTextNode(' Meal not Found Please enter a Foreign Meal')
      );

      parent.insertBefore(div, form);
      spinner.style.display = 'none';
      setTimeout(() => {
        div.remove();
      }, 3000);
    } else {
      dispatch({ type: SEARCH_MEALS, payload: res.data.meals });
    }
  };

  // GET_MEAL
  const getMeal = async (food) => {
    setLoading();

    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}
    `);

    dispatch({ type: GET_MEAL, payload: res.data.meals[0] });
  };

  // CLEAR MEALS
  const clearMeal = () => {
    dispatch({ type: CLEAR_MEALS });
  };

  // SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MealContext.Provider
      value={{
        meals: state.meals,
        meal: state.meal,
        loading: state.loading,
        searchMeals,
        setLoading,
        getMeal,
        clearMeal,
      }}
    >
      {props.children}
    </MealContext.Provider>
  );
};

export default MealState;
