import React from 'react';
import Header from "@/app/components/Header";
import GroceriesContainer from "@/app/components/GroceriesContainer";

const GroceriesPage = () => {
    return (
        <div className="flex flex-col justify-between items-center">
            <Header />

            <main className="w-full">
                <GroceriesContainer />
            </main>

        </div>
    );
};

export default GroceriesPage;