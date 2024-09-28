"use client";

import React, {useState} from 'react';
import {groceryLists} from "@/app/lib/groceryLists";
import GroceryList from "@/app/components/GroceryList";

const GroceriesAccordion = () => {

    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    return (
        <section className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            {
                groceryLists.map((groceryList) => (
                    <div key={groceryList.id}
                         className="w-full mt-4 text-center text-offWhite bg-dark p-2 rounded-3xl cursor-pointer"
                         onClick={() => setActiveAccordion(groceryList.id)}>
                        <h2 className="font-bold">{groceryList.date}</h2>
                        {
                            activeAccordion === groceryList.id && (
                                <ul className="w-full flex flex-col justify-between items-center my-4">
                                    {
                                        groceryList.groceries.map((grocery) => (
                                            <li key={grocery.name} className="w-4/5 mt-1">
                                                <GroceryList
                                                    quantity={grocery.quantity}
                                                    unit={grocery.unit}
                                                    productName={grocery.name}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </div>
                ))
            }
        </section>
    );
};

export default GroceriesAccordion;