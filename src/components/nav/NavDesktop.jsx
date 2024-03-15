import NavLayout from "../../layouts/NavLayout";
import Logo from "../Logo";
import SearchBar from "../SearchBar";


export default function NavDesktop({ children }) {
    return (
        <NavLayout>
            <div className="hidden px-10 py-3 lg:flex w-full items-center justify-between">
                <Logo />
                <SearchBar />
                <div className="flex ">
                    {children}
                </div>
            </div>
        </NavLayout>
    )
}