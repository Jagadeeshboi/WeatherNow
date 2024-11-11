import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        if (query.trim()) {
        onSearch(query);  
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-2"
            />
            <button type="submit" className="bg-blue-500 rounded-md px-2 py-1 text-white">Search</button>
        </form>
    );
};

export default SearchBar;
