import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to={"/"} className="w-[150px] cursor-pointer">
            <img src={logo} alt="" />
        </Link>
    )
}