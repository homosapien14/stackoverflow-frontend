'use client';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="w-1/3 mx-auto mt-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search questions..."
          className="border rounded-md w-full px-4 py-2"
          value={query}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 text-white px-3 py-2 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
