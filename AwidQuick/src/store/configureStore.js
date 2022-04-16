import { createStore, combineReducers } from "redux";

import authReducer from "./Reducers/authReducer";
import langueReducer from "./Reducers/langueReducer";

export default createStore(
  combineReducers({
    authReducer,
    langueReducer,
  })
);
