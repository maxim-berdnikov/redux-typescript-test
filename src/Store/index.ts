import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { rootReducer } from "./Reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
