import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions; // Update actions export
export default favoritesSlice.reducer;
