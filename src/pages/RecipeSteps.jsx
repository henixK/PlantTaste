import React from 'react';
import { useGetRecipeStepsQuery } from '../redux/slice/apiSlice'; // Adjust the import path as necessary
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CiAlarmOn, CiUser } from "react-icons/ci";

const RecipeSteps = () => {
    const { id } = useParams(); // Get the recipe ID from the URL
    const { data: stepsData, isLoading, isError, error } = useGetRecipeStepsQuery(id);
    const location = useLocation();
    const information = location.state?.information;
    console.log(information.extendedIngredients)
    if (isLoading) {
        return <div>Loading recipe steps...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const ingredient = information.extendedIngredients;
    const stepsRecipe = stepsData[0]; // Get the first element of stepsData


    return (
        <div className='h-full my-40 lg:my-24 lg:px-8'>
            <h1 className='text-4xl my-12 px-8 underline underline-offset-4 decoration-lime-600'>{information.title}</h1>
            <div className='flex flex-col lg:flex-row gap-10 w-full lg:rounded-2xl shadow-2xl bg-white'>
                <div className='lg:w-1/2 lg:rounded-l-2xl overflow-hidden'>
                    <img className='w-full h-ful object-contain object-center' src={information.image} alt="" />
                </div>
                <div className='lg:w-1/2 px-10 text-center flex flex-col lg:flex-col justify-center items-center'>
                    <h1 className='text-2xl mb-4 underline underline-offset-8 decoration-lime-600'>Summary</h1>
                    <div className='text-justify' dangerouslySetInnerHTML={{ __html: information.summary }} />
                    <div className='w-[350px] lg:w-[300px] flex justify-center gap-10 my-4'>
                        <div className='flex items-center justify-between gap-2'>
                            <CiUser size={20} />
                            <p>{information.servings} servings</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiAlarmOn size={20} />
                            <p>{information.readyInMinutes} minutes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full flex bg-white flex-col lg:flex-row lg:gap-10 lg:rounded-2xl shadow-2xl mt-10'>
                <div className='lg:w-1/2 lg:py-10'>
                    <h1 className='text-center text-xl my-2 underline underline-offset-4 decoration-lime-600'>Ingredients</h1>
                    <div className='flex flex-col items-center '>
                        {ingredient && Array.isArray(ingredient) && ingredient.map((ingredientRecipe, index) => (
                            <div key={index}>
                                <li className='list-none py-2'>{ingredientRecipe.name}</li>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='lg:w-1/2 lg:py-10 my-5 lg:my-0'>
                    <h1 className='text-center text-xl my-2 underline underline-offset-4 decoration-lime-600'>Steps</h1>
                    <ol className='px-10 list-decimal'>
                        {stepsRecipe.steps.map((stepData, index) => (
                            <li className="py-2" key={index}>{stepData.step}</li>
                        ))}
                    </ol>
                </div>
            </div>

        </div>
    );
};

export default RecipeSteps;
