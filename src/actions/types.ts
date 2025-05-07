export const FETCH_JOKES_REQUEST = "FETCH_JOKES_REQUEST";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAILURE = "FETCH_JOKES_FAILURE";

export const RATE_JOKE = "RATE_JOKE";

export const SET_FILTER = "SET_FILTER";

export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
  rating?: number;
}

export interface JokeState {
  loading: boolean;
  jokes: Joke[];
  error: string | null;
}

export type FilterType = "all" | "general" | "programming" | "knock-knock";
