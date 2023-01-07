import { COMMENTS } from "../../shared/comments";
import * as actionTypes from "../Actions/ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return [
        ...state,
        {
          id: state?.length,
          dishId: action?.payload?.dishId,
          rating: action?.payload?.rating,
          comment: action?.payload?.comment,
          author: action?.payload?.author,
          date: new Date().toISOString(),
        },
      ];
    default:
      return state;
  }
};
