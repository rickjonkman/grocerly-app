import React from 'react';
import SearchInput from "@/app/components/SearchInput";
import Button from "@/app/components/Button";

const SearchContainer = () => {
    return (
        <div className="w-full px-4 mt-8">
            <div className="w-full h-[20rem] lg:h-[28rem] bg-orange bg-searchImg bg-cover flex flex-col justify-between items-center rounded-3xl">

                <div className="flex flex-col justify-between items-center">
                    <h1 className="px-4 py-2 lg:py-4 mt-8 bg-gray text-2xl sm:text-4xl lg:text-6xl text-offWhite font-bold rounded-3xl">
                        Find your favourite recipe
                    </h1>
                    <SearchInput/>
                </div>

                <div className="w-full flex justify-end items-center">
                    <Button className="bg-offWhite bg-opacity-75 text-dark text-sm lg:text-base font-bold capitalize px-4 rounded-2xl mb-2 mr-2 lg:mb-6 lg:mr-6 hover:bg-opacity-100 duration-500">
                        Or browse all recipes
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default SearchContainer;