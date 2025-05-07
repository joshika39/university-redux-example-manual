import {
  FETCH_JOKES_REQUEST,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE,
  RATE_JOKE,
  type JokeState,
} from "../actions/types";
import { type AnyAction } from "redux";

const initialState: JokeState = {
  loading: false,
  jokes: [],
  error: null,
};

export default function jokeReducer(
  state = initialState,
  action: AnyAction,
): JokeState {
  switch (action.type) {
    case FETCH_JOKES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_JOKES_SUCCESS:
      return { ...state, loading: false, jokes: action.payload };
    case FETCH_JOKES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RATE_JOKE:
      return {
        ...state,
        jokes: state.jokes.map((joke) =>
          joke.id === action.payload.jokeId
            ? { ...joke, rating: action.payload.rating }
            : joke,
        ),
      };
    default:
      return state;
  }
}
