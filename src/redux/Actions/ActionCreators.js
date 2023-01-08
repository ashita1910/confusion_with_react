import { DISHES } from "../../shared/dishes";
import * as actionTypes from "./ActionTypes";

export const addComment = (dishId, rating, author, comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const addDishes = (dishes) => ({
  type: actionTypes.ADD_DISHES,
  payload: dishes,
});

export const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING,
});

export const dishesFailed = (errMess) => ({
  type: actionTypes.DISHES_FAILED,
  payload: errMess,
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};
