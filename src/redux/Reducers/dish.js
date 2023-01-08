import * as actionTypes from "../Actions/ActionTypes";

export const Dishes = (
  state = {
    isLoading: true,
    errMess: null,
    dishes: [],
  },
  action
) => {
  switch (action.type) {
    case actionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };
    case actionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        dishes: [],
      };
    case actionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };
    default:
      return state;
  }
};
