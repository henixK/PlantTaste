import NavMobile from "./nav/NavMobile";
import NavDesktop from "./nav/NavDesktop";
import { Outlet, Link } from "react-router-dom";

const Navs = ({ children, route }) => {
    return (
        <Link to={route}>
            <h1 className="-z-[9999] list-none text-center py-2 px-4 text-gray-700 hover:text-green-600 transition-colors duration-300 ease-in-out cursor-pointer">{children}</h1>
        </Link>
    )
}

export default function Nav({ isMobile }) {
    return (
        <>
            <NavMobile >
                <Navs route={"/About"}>About</Navs>
                <Navs route={"/sustain"}>Sustainability</Navs>
            </NavMobile>
            <NavDesktop>
                <Navs route={"/About"}>About</Navs>
                <Navs route={"/sustain"}>Sustainability</Navs>
            </NavDesktop>

        </>
    )
}
