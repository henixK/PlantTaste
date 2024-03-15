// RecipeDetail.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGetInformationQuery } from '../redux/slice/apiSlice';
import { CiAlarmOn, CiUser } from "react-icons/ci";
import SkeletonCard from './SkeletonCard';
import Star from "../assets/Stella.png";

const RecipeDetail = ({ recipe }) => {
    const recipeID = recipe.id;
    const { data: information, isLoading, isError, error } = useGetInformationQuery(recipeID);
    const [isDelayedLoading, setIsDelayedLoading] = useState(false);
    const navigate = useNavigate();

    // delay per il fetch delle ricette
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDelayedLoading(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [recipeID]);

    if (isLoading || !isDelayedLoading) {
        return <SkeletonCard />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const handleReadRecipeClick = () => {
        navigate(`/recipe/${recipeID}/steps`, { state: { information } });
    };


    return (
        <div className='w-full h-[450px] lg:w-[700px] lg:h-[250px] my-2 flex flex-col lg:flex-row rounded-xl border overflow-hidden shadow-2xl bg-white'>
            <div id={information.id} onClick={handleReadRecipeClick} className='lg:w-[300px] cursor-pointer'>
                <img className='w-full h-full object-cover object-center' src={information.image} alt="" />
            </div>
            <div className='lg:w-[400px] h-full flex flex-col justify-center lg:px-2 relative'>
                <div className='absolute top-2 px-2 flex gap-2 text-green-600 font-bold'>
                    <div className='border py-1 px-2 rounded-full'>
                        {information.dishTypes[1]}
                    </div>
                    <div className='border py-1 px-2 rounded-full'>
                        {information.dishTypes[0]}
                    </div>
                </div>
                <div className='flex items-center absolute gap-2 top-2 right-4'>
                    <span className='font-bold'>{Math.round(information.spoonacularScore / 30)}</span>
                    <img width={30} src={Star} alt="" />
                </div>
                <h1 className=' text-2xl text-center px-2 lg:px-10'>{information.title}</h1>
                <div className='flex w-full justify-evenly items-center lg:py-2 my-2 absolute bottom-0 lg:bottom-0 lg:left-0'>
                    <div className='flex items-center justify-between gap-2'>
                        <CiUser size={20} />
                        <p>{information.servings} servings</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiAlarmOn size={20} />
                        <p>{information.readyInMinutes} minutes</p>
                    </div>
                    <div id={information.id} onClick={handleReadRecipeClick} className='text-white font-bold py-2 px-4 rounded-full bg-green-600 cursor-pointer'>
                        <h3>Read recipe</h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecipeDetail;
