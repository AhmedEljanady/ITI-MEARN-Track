import { combineReducers } from "redux";
import moviesReducer from "./movies";
import favReducer from "./reducer";

export default combineReducers({
  movies: moviesReducer,
  favorites: favReducer,
});
