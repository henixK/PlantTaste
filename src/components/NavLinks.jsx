import { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';

export default function NavLinks({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div>
                <div>
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
                </div>
            </div>
            <ul className={`transition-all duration-500 ease-in-out transform   ${isMenuOpen ? 'translate-y-32' : '-translate-y-full'} absolute flex flex-col right-0 top-0 bg-white py-10 w-full -z-[9999]`} >
                {children}
            </ul>
        </>

    );
}
