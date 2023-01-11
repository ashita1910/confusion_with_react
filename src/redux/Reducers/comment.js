import * as actionTypes from "../Actions/ActionTypes";

export const Comments = (
  state = {
    isLoading: true,
    errMess: null,
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case actionTypes.COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        comments: [],
      };
    case actionTypes.ADD_COMMENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        comments: action.payload,
      };
    case actionTypes.ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};
