import {combineReducers} from "redux"
import counterReducer from "./reducers/CounterReducers"
const rootReducer = combineReducers({
  counterReducer,
});
export default rootReducer;