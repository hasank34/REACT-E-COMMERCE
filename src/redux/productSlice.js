import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "./../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productsDetail: [],
  productsDetailStatus: STATUS.IDLE,
};
export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getCategoryProducts = createAsyncThunk(
  "getCategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

export const getDetailProducts = createAsyncThunk("getProduct", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.productsStatus = STATUS.FAIL;
    });
    // DETAY
    builder.addCase(getDetailProducts.pending, (state) => {
      state.productsDetailStatus = STATUS.LOADING;
    });
    builder.addCase(getDetailProducts.fulfilled, (state, action) => {
      state.productsDetailStatus = STATUS.SUCCESS;
      state.productsDetail = action.payload;
    });
    builder.addCase(getDetailProducts.rejected, (state) => {
      state.productsDetailStatus = STATUS.FAIL;
    });
    // category
    builder.addCase(getCategoryProducts.pending, (state) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.productsStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
    builder.addCase(getCategoryProducts.rejected, (state) => {
      state.productsStatus = STATUS.FAIL;
    });
  },
});
export default productSlice.reducer;
