// RecipeList.js
import React, { useEffect } from 'react';
import { useGetByIngredientsQuery } from '../redux/slice/apiSlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRecipeIds } from '../redux/slice/recipeID';


import RecipeDetail from '../components/RecipeCard'; // Import the RecipeDetail component

const RecipeList = () => {
    const { searchTerm } = useParams();
    const { data: recipes } = useGetByIngredientsQuery(searchTerm, {
        skip: !searchTerm,
    });

    const recipeList = recipes?.results;

    const dispatch = useDispatch();
    console.log(recipeList)
    useEffect(() => {
        if (recipeList) {
            const recipeIds = recipeList.map(recipe => recipe.id);
            dispatch(setRecipeIds(recipeIds));
        }
    }, [recipeList, dispatch]);

    return (
        <div className='w-full grid grid-cols-1 py-5 lg:py-0 lg:my-16'>
            <h1 className='text-center text-xl my-10 font-thin'>Search Results for: <span className='font-bold'>{searchTerm}</span></h1>
            <div className='w-full flex flex-col items-center gap-5 mb-12 px-4'>
                {Array.isArray(recipeList) && recipeList.map((recipe) => (
                    <RecipeDetail key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
