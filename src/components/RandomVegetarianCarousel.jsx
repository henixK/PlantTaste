import React from 'react';
import { useGetRandomRecipeQuery } from '../redux/slice/apiSlice';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RandomVegetarianRecipesCarousel = () => {
    const { data: recipes, isLoading, error } = useGetRandomRecipeQuery();
    console.log(recipes)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const recipeList = recipes?.results;

    return (
        <div className='w-full  h-[500px] mt-40 lg:mt-24'>
            <Slider {...settings}>
                {Array.isArray(recipes) && recipeList.map((recipe) => {
                    // Check for undefined or empty values
                    if (!recipe.id || !recipe.image) {
                        console.log('Skipping item due to missing id or image:', recipe);
                        return null;
                    }

                    // Debugging: Log each recipe
                    console.log('Rendering recipe:', recipe);

                    return (
                        <div className='border-2 border-black h-full' key={recipe.id}>
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default RandomVegetarianRecipesCarousel;
