import React from 'react';
import {
    CalendarIcon,
    FolderHeartIcon,
    GlobeIcon,
    HandCoinsIcon,
    HeartPulseIcon,
    LibraryIcon,
    LightbulbIcon,
    ShoppingCartIcon
} from "lucide-react";

const features = [
    {
        title: "Recommendations",
        description: "Find recipes based on dietary preferences and allergies",
        icon: LightbulbIcon
    },
    {
        title: "Smart Shopping",
        description: "Automatically generate shopping lists based on meal plans, minimizing waste",
        icon: ShoppingCartIcon
    },
    {
        title: "Save your favourites",
        description: "Save all your favourite recipes",
        icon: FolderHeartIcon
    },
    {
        title: "Extensive Recipe Library",
        description: "Explore our vast collection of recipes from various cuisines",
        icon: LibraryIcon
    },
    {
        title: "Expense Tracking",
        description: "Track grocery spending and set budget limits",
        icon: HandCoinsIcon
    },
    {
        title: "Health Goal Tracking",
        description: "Track your progress towards your own set health goals",
        icon: HeartPulseIcon
    },
    {
        title: "Share your creations",
        description: "Create your own recipes and share them with the community",
        icon: GlobeIcon
    },
    {
        title: "Customizable Meals",
        description: "Create your personalized meal plans for different occasions",
        icon: CalendarIcon
    }
]

const FeaturesGrid = () => {
    return (
        <section className="w-full bg-gray mt-8 lg:mt-16 px-4 sm:px-8 lg:px-16 py-8">

            <div className="flex flex-col justify-between items-start">
                <h1 className="text-offWhite font-bold text-2xl sm:text-4xl lg:text-7xl">Create a <span
                    className="text-orange">free account</span></h1>
                <h2 className="text-offWhite font-bold text-base sm:text-2xl lg:text-4xl">Plan your meals and groceries throughout the week</h2>
            </div>

            <div className="my-8">
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        features.map((feature) => (
                            <div key={feature.title} className="mt-4 grow">

                                <dt className="flex justify-start items-center">
                                    <feature.icon className="text-orange"/>
                                    <h3 className="text-orange font-bold text-base sm:text-xl ml-4">{feature.title}</h3>
                                </dt>
                                <dd className="text-offWhite text-sm mt-2">
                                    {feature.description}
                                </dd>
                            </div>
                        ))
                    }
                </dl>
            </div>

        </section>
    );
};

export default FeaturesGrid;