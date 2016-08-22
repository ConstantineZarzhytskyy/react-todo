import { combineReducers } from "redux"
import counter from './reducerCounter.js'
import tasks from './taskReducer.js'

const rootReducer = combineReducers({
  counter,
  tasks
});

module.exports = rootReducer;
