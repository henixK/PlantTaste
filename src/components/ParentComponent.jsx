import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const ParentComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (searchQuery) => {
        // Handle the search action here
        console.log("Search query:", searchQuery);
    };
    

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <RecipeList searchQuery={searchQuery} />
        </div>
    );
};

export default ParentComponent;
