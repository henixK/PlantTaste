import NavLayout from "../../layouts/NavLayout";
import NavLinks from "../NavLinks";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

export default function NavMobile({ children }) {

    return (
        <NavLayout>
            <div className="w-full lg:hidden">
                <div className=" absolute w-full px-4 py-2 top-[76px] bg-white">
                    <SearchBar />
                </div>
                <div className="flex justify-between w-full px-2 py-4 relative">
                    <Logo />
                    <NavLinks>
                        {children}
                    </NavLinks>
                </div>
            </div>
        </NavLayout>
    )
}