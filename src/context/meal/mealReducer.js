import { SEARCH_MEALS, GET_MEAL, CLEAR_MEALS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MEALS:
      return {
        ...state,
        meals: action.payload,
        loading: false,
      };

    case GET_MEAL:
      return {
        ...state,
        meal: action.payload,
        loading: false,
      };

    case CLEAR_MEALS:
      return {
        ...state,
        meals: [],
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
