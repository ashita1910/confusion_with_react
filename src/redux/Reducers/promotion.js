import * as actionTypes from "../Actions/ActionTypes";

export const Promotions = (
  state = {
    isLoading: true,
    errMess: null,
    promotions: [],
  },
  action
) => {
  switch (action.type) {
    case actionTypes.PROMOTIONS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] };
    case actionTypes.PROMOTIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        promotions: [],
      };
    case actionTypes.ADD_PROMOTIONS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };
    default:
      return state;
  }
};
