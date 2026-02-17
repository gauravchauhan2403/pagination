import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductRepository } from "../data/ProductData";
import { PaginationService } from "../domain/PaginationService";

export const fetchProducts = createAsyncThunk(
  "pagination/fetchProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState().pagination;
      const skip = PaginationService.getSkip(state.page, state.limit);

      return await ProductRepository.getProducts(state.limit, skip);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
