import { combineReducers } from "redux";
import studentReducer from "./student/studentReducer";
import labReducer from "./lab/labReducer";

const rootReducer = combineReducers({
  students: studentReducer,
  labs: labReducer,
});

export default rootReducer;
