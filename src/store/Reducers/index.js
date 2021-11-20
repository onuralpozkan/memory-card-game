   
import { combineReducers } from "redux";
import addOneReducer from "./addOneReducer";
import correctPairReducer from  "./cardReducers"
const rootReducer = combineReducers({
  addOneReducer,
  correctPairReducer
});

export default rootReducer;
