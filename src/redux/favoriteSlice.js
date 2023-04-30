import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      console.log(state.favorites.length);
    },
    deleteFavorite: (state, action) => {
      console.log("delete");
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
