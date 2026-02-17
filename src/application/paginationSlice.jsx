import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./paginationThunks";

const initialState = {
  products: [],
  total: 0,
  page: 1,
  limit: 10,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage } = slice.actions;
export default slice.reducer;
