import { createStore, combineReducers } from "redux";

import authReducer from "./reducers/authReducer";
import langueReducer from "./reducers/langueReducer";

export default createStore(
  combineReducers({
    authReducer,
    langueReducer,
  })
);
