import fetch from "cross-fetch";
import * as actionTypes from "./ActionTypes";
import { baseUrl } from "../../shared/baseUrl";

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

export const fetchDishes = () => async (dispatch) => {
  dispatch(dishesLoading());

  return await fetch(baseUrl + "dishes")
    .then((res) => {
      if (res?.ok) {
        return res;
      } else {
        var error = new Error(
          "Error: " + res?.status + " : " + res?.statusText
        );
        error.response = res;
        throw error;
      }
    })
    .then((res) => res.json())
    .then((data) => dispatch(addDishes(data)))
    .catch((err) => dispatch(dishesFailed(err?.message)));
};

export const commentsFailed = (errMess) => ({
  type: actionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = (comments) => ({
  type: actionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchComments = () => async (dispatch) => {
  return await fetch(baseUrl + "comments")
    .then((res) => {
      if (res?.ok) {
        return res;
      } else {
        var error = new Error(
          "Error: " + res?.status + " : " + res?.statusText
        );
        error.response = res;
        throw error;
      }
    })
    .then((res) => res.json())
    .then((data) => dispatch(addComments(data)))
    .catch((err) => dispatch(commentsFailed(err?.message)));
};

export const addComment = (comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment =
  (dishId, rating, author, comment) => async (dispatch) => {
    return await fetch(baseUrl + "comments", {
      method: "POST",
      body: JSON.stringify({
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author,
        date: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((res) => {
        if (res?.ok) {
          return res;
        } else {
          var error = new Error(
            "Error: " + res?.status + " : " + res?.statusText
          );
          error.response = res;
          throw error;
        }
      })
      .then((res) => res.json())
      .then((data) => dispatch(addComment(data)))
      .catch((err) => {
        console.log("post comments", err.message);
        alert("Your comment could not be posted!\nError: " + err.message);
      });
  };

export const postFeedback = (feedback) => async (dispatch) => {
  return await fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((res) => {
      if (res?.ok) {
        return res;
      } else {
        var error = new Error(
          "Error: " + res?.status + " : " + res?.statusText
        );
        error.response = res;
        throw error;
      }
    })
    .then((res) => res.json())
    .then((data) =>
      alert(
        "Your feedback submitted successfully!\nFeedback received: " +
          JSON.stringify(data)
      )
    )
    .catch((err) =>
      alert("Your feedback could not be submitted!\nError: " + err?.message)
    );
};

export const addPromotions = (promotions) => ({
  type: actionTypes.ADD_PROMOTIONS,
  payload: promotions,
});

export const promotionsLoading = () => ({
  type: actionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errMess) => ({
  type: actionTypes.PROMOTIONS_FAILED,
  payload: errMess,
});

export const fetchPromotions = () => async (dispatch) => {
  dispatch(promotionsLoading(true));

  return await fetch(baseUrl + "promotions")
    .then((res) => {
      if (res?.ok) {
        return res;
      } else {
        var error = new Error(
          "Error: " + res?.status + " : " + res?.statusText
        );
        error.response = res;
        throw error;
      }
    })
    .then((res) => res.json())
    .then((data) => dispatch(addPromotions(data)))
    .catch((err) => dispatch(promotionsFailed(err?.message)));
};

export const addLeaders = (promotions) => ({
  type: actionTypes.ADD_LEADERS,
  payload: promotions,
});

export const leadersLoading = () => ({
  type: actionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errMess) => ({
  type: actionTypes.LEADERS_FAILED,
  payload: errMess,
});

export const fetchLeaders = () => async (dispatch) => {
  dispatch(leadersLoading(true));

  return await fetch(baseUrl + "leaders")
    .then((res) => {
      if (res?.ok) {
        return res;
      } else {
        var error = new Error(
          "Error: " + res?.status + " : " + res?.statusText
        );
        error.response = res;
        throw error;
      }
    })
    .then((res) => res.json())
    .then((data) => dispatch(addLeaders(data)))
    .catch((err) => dispatch(leadersFailed(err?.message)));
};
