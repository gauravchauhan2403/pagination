import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsApi } from "../services/ProductData";
import { getSkip } from "../utils/PaginationUtils";

export const fetchProducts = createAsyncThunk(
  "pagination/fetchProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState().pagination;
      const skip = getSkip(state.page, state.limit);

      return await fetchProductsApi(state.limit, skip);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const slice = createSlice({
  name: "pagination",
  initialState: {
    products: [],
    page: 1,
    totalPages: 0,
    limit: 10,
    loading: false,
    error: null,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalPages = Math.ceil(
          action.payload.total / state.limit
        );
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage } = slice.actions;
export default slice.reducer;
