import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../application/paginationSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});
