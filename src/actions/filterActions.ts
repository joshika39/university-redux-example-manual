import { SET_FILTER, type FilterType } from "./types";

export const setFilter = (filter: FilterType) => ({
  type: SET_FILTER,
  payload: filter,
});
