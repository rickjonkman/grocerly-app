"use client";

import React from 'react';
import {Search} from "lucide-react";

const SearchInput = () => {

    const handleSearch = () => {
        console.log("searching...");
    }

    return (
        <div className="h-auto flex justify-between items-center bg-offWhite rounded-xl px-4 mt-4 lg:mt-8 lg:w-3/5">
            <input type="text" placeholder="Search for recipe..." className="text-sm sm:text-base md:p-2 lg:p-4" />
            <Search onClick={handleSearch} className="cursor-pointer h-3/4" />
        </div>

    );
};

export default SearchInput;