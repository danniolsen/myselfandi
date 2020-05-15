import { combineReducers } from "redux";
import skillsReducer from "./skillsReducer";
import expReducer from "./expReducer";

export default combineReducers({
  skills: skillsReducer,
  exps: expReducer
});
