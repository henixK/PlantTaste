import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { recipeApi } from "./slice/apiSlice";
import recipeIdsReducer from './slice/recipeID'; // Import your recipe IDs reducer

export const store = configureStore({
    reducer: {
        // Add the reducer from your recipeApi
        [recipeApi.reducerPath]: recipeApi.reducer,
        // Add the reducer for managing recipe IDs
        recipeIds: recipeIdsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(recipeApi.middleware),
});

setupListeners(store.dispatch);

export const { useGetByIngredientsQuery, useGetRandomRecipeQuery, useGetInformationQuery } = recipeApi;
