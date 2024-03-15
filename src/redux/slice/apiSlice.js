import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = "5957f4dc9f0040b7b18173452fba6026";

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/' }),
    endpoints: (builder) => ({
        getByIngredients: builder.query({
            query: (ingredients) => `recipes/complexSearch?apiKey=${apiKey}&includeIngredients=${ingredients}&diet=vegetarian`,
        }),
        getRandomRecipe: builder.query({
            query: () => `recipes/random?apiKey=${apiKey}&number=10&diet=vegetarian`,
        }),
        getInformation: builder.query({
            query: (id) => `recipes/${id}/information?apiKey=${apiKey}`
        }),
        getRecipeSteps: builder.query({
            query:(id) => `/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`
        })
    }),
});

export const { useGetByIngredientsQuery, useGetRandomRecipeQuery, useGetInformationQuery, useGetRecipeStepsQuery } = recipeApi;
