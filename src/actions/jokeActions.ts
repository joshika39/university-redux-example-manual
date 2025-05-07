import {
  FETCH_JOKES_REQUEST,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE,
  RATE_JOKE,
  type Joke,
} from "./types";
import { type ThunkAction } from "redux-thunk";
import { type AnyAction } from "redux";
import { type RootState } from "../store";

export const fetchJokes = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    dispatch({ type: FETCH_JOKES_REQUEST });

    try {
      dispatch({ type: FETCH_JOKES_SUCCESS, payload: data });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch({ type: FETCH_JOKES_FAILURE, payload: error.message });
    }
  };
};

export const rateJoke = (jokeId: number, rating: number) => ({
  type: RATE_JOKE,
  payload: { jokeId, rating },
});
