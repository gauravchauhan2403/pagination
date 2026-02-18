import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});
