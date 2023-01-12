import * as actionTypes from "../Actions/ActionTypes";

export const Leaders = (
  state = {
    isLoading: true,
    errMess: null,
    leaders: [],
  },
  action
) => {
  switch (action.type) {
    case actionTypes.LEADERS_LOADING:
      return { ...state, isLoading: true, errMess: null, leaders: [] };
    case actionTypes.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        leaders: [],
      };
    case actionTypes.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload,
      };
    default:
      return state;
  }
};
