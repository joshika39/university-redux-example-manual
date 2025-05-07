import { combineReducers } from "redux";
import jokeReducer from "./jokeReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  jokeState: jokeReducer,
  filter: filterReducer,
});

export default rootReducer;
