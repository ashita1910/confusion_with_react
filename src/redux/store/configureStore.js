import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Comments } from "../Reducers/comment";
import { Dishes } from "../Reducers/dish";
import { Leaders } from "../Reducers/leader";
import { Promotions } from "../Reducers/promotion";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
