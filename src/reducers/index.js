import { combineReducers } from "redux";
import landingPuzzleReducer from "./landingPuzzle";

export default combineReducers({
  landingPuzzle: landingPuzzleReducer
})