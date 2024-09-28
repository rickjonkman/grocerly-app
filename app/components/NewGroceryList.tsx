import React from 'react';
import GroceryList from "@/app/components/GroceryList";

const newGroceryList = [
    {
        quantity: 1,
        unit: 'kg',
        productName: 'Chicken',
    },
    {
        quantity: 1,
        unit: 'kg',
        productName: 'Beef',
    },
    {
        quantity: 2,
        unit: 'pcs',
        productName: 'Avocados',
    },
    {
        quantity: 500,
        unit: 'gr',
        productName: 'Spinach',
    }
]

const NewGroceryList = () => {
    return (
        <section className="w-full bg-orange rounded-2xl p-4">
            <h2 className="font-bold text-center p-4 sm:text-2xl lg:text-4xl lg:p-8">Your new list</h2>
            <ul className="w-full flex flex-col justify-between items-center gap-1 bg-orangeLight p-2 lg:p-4 rounded-2xl">
                {
                    newGroceryList.map((grocery) => (
                        <li key={grocery.productName} className="w-full px-4">
                            <GroceryList
                                quantity={grocery.quantity}
                                unit={grocery.unit}
                                productName={grocery.productName}
                            />
                        </li>

                    ))
                }
            </ul>
        </section>
    );
};

export default NewGroceryList;