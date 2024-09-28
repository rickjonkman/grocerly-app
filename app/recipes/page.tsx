import React from 'react';
import Header from "@/app/components/Header";
import SearchContainer from "@/app/components/SearchContainer";

function RecipesPage() {
    return (
        <>
            <Header />

            <main className="w-full flex flex-col justify-between items-center">
                <SearchContainer/>
            </main>
        </>
    );
}

export default RecipesPage;