import { combineReducers } from "redux";
import { todoAppReducer } from "../reducer";

const rootReducer = combineReducers({
  todoList: todoAppReducer,
});

export default rootReducer;
