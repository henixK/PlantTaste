import FooterLayout from "../layouts/FooterLayour";
import { FaGithub } from "react-icons/fa";
import Logo from "./Logo";
import google from "../assets/Googleplay.svg";
import appStore from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";

export default function Footer() {
    return (
        <FooterLayout className={"w-full flex flex-col lg:flex-row"}>
            <div className="flex gap-5 items-center py-10 lg:py-4" >
                <Logo />
                <p>&copy; 2024 PlantTaste. All rights reserved.</p>
            </div>
            <div className="text-left w-[400px] lg:w-1/2">
                <div className="w-full flex flex-col justify-end lg:flex-row items-center gap-5 mt-4">
                    <div className="lg:w-[130px] cursor-pointer">
                        <img className="lg:w-full w-[200px]" src={google} alt="" />
                    </div>
                    <div className="cursor-pointer">
                        <img className="lg:w-full w-[200px]" src={appStore} alt="" />
                    </div>
                    <div className="cursor-pointer">
                        <FaGithub size={30} />
                    </div>
                </div>
            </div>
        </FooterLayout>
    )
}