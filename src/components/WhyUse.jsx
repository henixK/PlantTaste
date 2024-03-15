import Section from "../layouts/Section";
import Card from "./Card";
import Slider from "react-slick";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

//immagini
import health from "../assets/health.jpg";
import variation from "../assets/variation.jpeg";
import sustainability from "../assets/sustainability.jpeg";
import creativity from "../assets/creativity.jpeg";
import ethics from "../assets/ethics.jpeg";
import community from "../assets/community.jpeg";

//componenti slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const dataCard = [
    {
        img: health,
        title: "Health and Wellness",
        description: "Following a vegetarian diet can lead to various health benefits, such as reducing the risk of heart disease, obesity, and diabetes. PlantTaste provides healthy and nutritious recipes that can contribute to overall well-being."
    },
    {
        img: variation,
        title: "Culinary Variation",
        description: "Vegetarian cuisine offers a wide range of culinary options, from creative salads to hearty main dishes. PlantTaste offers a variety of recipes to cater to everyone's tastes and preferences, ensuring a diverse and stimulating culinary experience."
    },
    {
        img: sustainability,
        title: "Environmental Sustainability",
        description: "Reducing meat consumption can help reduce the environmental impact of the food industry, including greenhouse gas emissions and deforestation. PlantTaste promotes a sustainable lifestyle by offering plant-based recipes that help reduce ecological footprint."
    },
    {
        img: creativity,
        title: "Kitchen Creativity",
        description: "Vegetarian cuisine provides an opportunity to experiment with a wide range of fresh ingredients, spices, and cooking techniques. PlantTaste provides inspiration and tips for creating delicious and innovative dishes, encouraging creativity in the kitchen."
    },
    {
        img: ethics,
        title: "Ethics and Compassion for Animals",
        description: "Many people choose a vegetarian diet for ethical reasons, refusing to consume animal products to respect animals and reduce their exploitation. PlantTaste supports this choice by offering tasty and satisfying alternatives to meat."
    },
    {
        img: community,
        title: "Community and Sharing",
        description: "PlantTaste can serve as a platform for the vegetarian community, allowing users to share their recipes, tips, and culinary experiences. This sharing can create a sense of belonging and support among those who follow a vegetarian lifestyle."
    }
];

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-min p-5 absolute right-0 top-60 z-50 cursor-pointer hover:fill-slate-300"
            onClick={onClick}
        >
            <FaCircleArrowRight size={35} fill="grey" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-min p-5 absolute inset-y-60 z-50 cursor-pointer"
            onClick={onClick}
        >
            <FaCircleArrowLeft size={35} fill="grey" />
        </div>
    );
}

export default function WhyUse() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0 
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <>
            <Section className={" mt-40 lg:mt-20 flex-col"}>
                <h1 className="text-2xl mt-2 text-center hover:text-green-500">Good reasons to use PlantTaste</h1>
                <div className="w-full mt-5">
                    <Slider {...settings}>
                        {dataCard.map((item, index) => (
                            <Card key={index} img={item.img} title={item.title} description={item.description} />
                        ))}
                    </Slider>
                </div>
            </Section >
        </>
    )
}