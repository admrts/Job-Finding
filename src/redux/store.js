import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
  },
});
export default store;
