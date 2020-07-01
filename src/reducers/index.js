import { combineReducers,createStore } from "redux";
import TodoReducer from "./todo";

const allReducers = combineReducers({TodoReducer});
const store = createStore(allReducers); 

export default store;
