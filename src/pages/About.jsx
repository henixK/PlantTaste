import Carousel from "../components/Carousel";
import Section from "../layouts/Section";

import bg1 from "../assets/background/bg1.avif";
import bg2 from "../assets/background/bg2.jpg";
import bg3 from "../assets/background/bg3.jpg";
import bg4 from "../assets/background/bg4.jpg";
import bg5 from "../assets/background/bg5.jpg";

const backgrounds = [bg1, bg2, bg3, bg4, bg5];

export default function About() {
    return (
        <>
            <Section className={"h-full lg:h-screen flex flex-col lg:flex-row items-center mt-36 lg:mt-0"}>
                <Section className="lg:w-1/2 h-full lg:pl-10 lg:pr-20 px-10 py-4">
                    <article className="text-justify">
                        <h1 className="text-4xl font-bold mb-5 underline underline-offset-4 decoration-lime-600">Why on Earth Go Vegetarian?</h1>
                        <p className="text-base">Well, folks go vegetarian for all sorts of wild reasons – health kicks, cosmic connections, saving fluffy animals, or maybe just to impress their trendy herbivore friends. With veggies sprouting up everywhere, from grocery stores to hipster cafes, diving into the green scene has never been more tempting.</p>
                        <p className="text-base">Back in the day, people worried about missing out on nutrients when they skipped the meat parade. But guess what? Recent studies are shouting from the veggie patch that going meat-free isn't just cool; it's a health superhero. Yes, you heard it right – your kale and quinoa might just be the caped crusaders your body needs.</p>
                        <p className="text-base">Now, hold your tofu dogs! Being a card-carrying vegetarian isn't a magic ticket to healthville. You can't survive on pizza and soda alone (trust us, we've tried). For the ultimate veggie power-up, you've got to embrace the rainbow – eat all the colors of the veggie spectrum, swap the bad fats for the good ones (nuts, not nachos), and remember, portion control is the real superhero sidekick.</p>
                        <p className="text-base">So, if you're pondering the veggie life, remember: veggies aren't just food; they're your edible sidekicks in the epic quest for a healthier you. Embrace the veggie chaos – your taste buds (and maybe your waistline) will thank you! 🌽🦸</p>
                    </article>
                </Section>
                <Section className={"lg:w-1/2 h-full overflow-hidden"}>
                    <img className="h-full w-full object-cover" src={bg1} alt="" />
                </Section>
            </Section>
        </>
    )
}
