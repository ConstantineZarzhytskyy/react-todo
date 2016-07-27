import { combineReducers } from "redux"
import counter from './reducerCounter.js'

const rootReducer = combineReducers({
  counter
});

module.exports = rootReducer;
