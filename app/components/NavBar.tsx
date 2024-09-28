"use client";

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const navItems = [
    {title: "Recipes", href: "/"},
    {title: "Themes", href: "/themes"},
    {title: "Groceries", href: "/groceries"},
]

const NavBar = () => {

    const currentPath = usePathname();

    return (
        <nav className="hidden md:block">
            <ul className="flex justify-between items-center gap-4">
                {
                    navItems.map((item) => (
                        <li key={item.title}>
                            <Link
                                href={item.href}
                                className={`font-bold text-base p-4 hover:bg-grayExtraLight rounded-2xl
                                ${currentPath === item.href ? 'bg-orangeLight text-orange' : 'text-dark bg-transparent'}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
)
    ;
};

export default NavBar;