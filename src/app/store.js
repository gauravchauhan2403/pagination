import { configureStore } from "@reduxjs/toolkit";
import DummyReducer from "./slice";

export const store = configureStore({
  reducer: {
    dummy: DummyReducer,
  },
});
