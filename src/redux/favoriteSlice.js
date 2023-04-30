import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const item = state.favorites.find((fav) => fav.id === action.payload.id);
      console.log(item);
      if (item) {
        Alert.alert("already exist");
      } else {
        console.log("yok");
        state.favorites.push(action.payload);
      }
    },
    deleteFavorite: (state, action) => {
      console.log("delete");
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
