import { combineReducers } from "redux";
import skillsReducer from "./skillsReducer";
import expReducer from "./expReducer";
import activitiesReducer from "./activitiesReducer";

export default combineReducers({
  skills: skillsReducer,
  exps: expReducer,
  activities: activitiesReducer
});
