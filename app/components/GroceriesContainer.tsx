"use client";

import React, {useState} from 'react';
import Button from "@/app/components/Button";
import GroceriesAccordion from "@/app/components/GroceriesAccordion";
import NewGroceryList from "@/app/components/NewGroceryList";

const tabs = [
    { id: "recent", label: "Recent Lists" },
    { id: "new", label: "New List" },
]

const GroceriesContainer = () => {

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="m-4 flex flex-col justify-between items-center">
            <div className="w-full flex justify-evenly items-center p-4">
                {
                    tabs.map((tab) => (
                        <Button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`bg-transparent capitalize ${
                                activeTab === tab.id ? "text-orange" : "text-black text-opacity-50 hover:text-opacity-100"
                            }`}
                        >
                            {tab.label}
                        </Button>
                    ))
                }
            </div>

            <div className="w-full">
                {activeTab === "recent" ? <GroceriesAccordion /> : <NewGroceryList />}
            </div>
        </div>
    );
};

export default GroceriesContainer;