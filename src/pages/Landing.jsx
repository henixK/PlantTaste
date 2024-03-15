import Carousel from "../components/Carousel";
import WhyUse from "../components/WhyUse";
import Section from "../layouts/Section";
import SearchBar from "../components/SearchBar"
import CardReview from "../components/CardReview";
import { MdReviews } from "react-icons/md";
/* import RandomVegetarianRecipesCarousel from "../components/RandomVegetarianCarousel";
 */

const dataCardReview = [
    {
        title: "A true discovery for me!",
        description: "PlantTaste has completely revolutionized my culinary experience. The recipes are easy to follow and incredibly tasty. I've experimented with ingredients I never would have considered before and have been amazed by the results. I highly recommend PlantTaste to anyone interested in exploring vegetarian cuisine!"
    },
    {
        title: "Support for my ethical choice",
        description: "As a vegan, finding tasty and nutritious recipes can be a challenge. PlantTaste has become my trusted companion in the kitchen. The recipes are ethically conscious and offer delicious alternatives to meat and dairy. I'm grateful for this resource that allows me to follow my diet in a tasty and sustainable way."
    },
    {
        title: "A pleasant surprise",
        description: "I started using PlantTaste to expand my culinary repertoire, but I was pleasantly surprised by how easy and enjoyable it is to follow the recipes. I now regularly cook vegetarian dishes for my family, and they couldn't be more satisfied. Thank you PlantTaste for making vegetarian cooking so accessible and delicious!"
    }
]
export default function Landing() {
    return (
        <>
            {/* <RandomVegetarianRecipesCarousel /> */}
            <WhyUse />
            <Section className={"lg:mt-28 flex-col"}>
                <div className="flex flex-col lg:flex-row gap-3 items-center px-10">
                    <MdReviews size={35} />
                    <h1 className="text-xl">PlantTaste Reviews That Say It All for Vegetarians!</h1>
                </div>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20 px-10 my-5 lg:my-10">
                    {dataCardReview.map((item, index) => (
                        <CardReview key={index} img={item.img} title={item.title} description={item.description} />
                    ))}
                </div>
            </Section>
            <Section className={"h-[200px] bg-search bg-cover bg-no-repeat bg-center mt-10 flex-col"}>
                <h1 className="mb-8 text-2xl">Say goodbye to dinner stress</h1>
                <SearchBar />
            </Section>
        </>
    )
}