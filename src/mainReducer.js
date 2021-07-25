import { combineReducers } from "redux";
import user from "./ducks/user";
import jobs from "./ducks/jobs";
import upload from "./ducks/upload";

const rootReducer = combineReducers({
  user,
  jobs,
  upload,
});
export default rootReducer;
