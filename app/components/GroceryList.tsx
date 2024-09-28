import React from 'react';

interface GroceryListProps {
    quantity: number;
    unit: string;
    productName: string;
}

const GroceryList = ({ quantity, unit, productName }: GroceryListProps) => {
    return (
        <div className="w-full px-2 flex justify-between items-center bg-offWhite text-black rounded">
            <p className="w-1/5">{quantity}</p>
            <p className="w-1/5 text-left">{unit}</p>
            <p className="w-3/5 text-left">{productName}</p>
        </div>
    );
};

export default GroceryList;