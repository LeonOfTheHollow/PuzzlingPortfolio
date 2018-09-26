import { combineReducers } from "redux";
import landingPuzzleReducer from "./landingPuzzle";
import automatonZooReducer from "./AutomatonZoo";

export default combineReducers({
  landingPuzzle: landingPuzzleReducer,
  AutomatonZoo: automatonZooReducer,
})