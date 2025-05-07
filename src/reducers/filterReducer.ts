import { SET_FILTER, type FilterType } from "../actions/types";
import { type AnyAction } from "redux";

const initialState: FilterType = "all";

export default function filterReducer(
  state = initialState,
  action: AnyAction,
): FilterType {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}
