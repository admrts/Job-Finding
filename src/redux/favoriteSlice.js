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

      if (item) {
        Alert.alert("ERROR! This job already exist in favorites");
      } else {
        state.favorites.push(action.payload);
        Alert.alert("Successfully. This job added favorites.");
      }
    },
    deleteFavoriteById: (state, action) => {
      const filteredList = state.favorites.filter((item) => {
        return item.id !== action.payload;
      });
      state.favorites = filteredList;
      Alert.alert("Successfully Removed");
    },
  },
});

export const { addFavorite, deleteFavoriteById } = favoriteSlice.actions;
export default favoriteSlice.reducer;
