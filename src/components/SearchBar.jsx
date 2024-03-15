import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useGetByIngredientsQuery } from "../redux/slice/apiSlice";

export default function SearchBar() {
    const navigate = useNavigate(); // Corrected here
    const [searchTerm, setSearchTerm] = useState('');
    const { data: recipes } = useGetByIngredientsQuery(searchTerm);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/recipes/${searchTerm}`); // Corrected here
    };

    return (
        <form className="rounded-xl overflow-hidden lg:block border" onSubmit={handleSearch}>
            <div className="lg:w-[800px] relative">
                <input
                    className="w-full h-[40px] pl-10 focus:outline-none focus:border-2 border-green-600 placeholder-gray-700 rounded-xl"
                    type="search"
                    placeholder="Search recipes by ingredient"
                    name="search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search recipes"
                />
                <div className="absolute inset-2 w-min">
                    <GoSearch size={20} />
                </div>
            </div>
        </form>
    );
}
