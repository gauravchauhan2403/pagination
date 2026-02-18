import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // key : value
}

const slice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    // method : () => {}
  }
});

// export const { method } = slice.actions;
export default slice.reducer;
