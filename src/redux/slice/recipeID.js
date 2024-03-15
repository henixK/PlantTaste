// recipeIdsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const recipeIdsSlice = createSlice({
  name: 'recipeIds',
  initialState: { ids: [] },
  reducers: {
    setRecipeIds: (state, action) => {
      state.ids = action.payload;
    },
  },
});

export const { setRecipeIds } = recipeIdsSlice.actions;
export default recipeIdsSlice.reducer;
