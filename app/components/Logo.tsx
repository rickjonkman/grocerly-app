"use client";

import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";
import GrocerlyLogo from "../assets/images/logo.svg";

const Logo = () => {

    const router = useRouter();

    return (
        <Image
            src={GrocerlyLogo}
            alt="Grocerly Logo, click to go back to home"
            className="h-full w-auto cursor-pointer"
            onClick={() => router.push("/")}
        />
    );
};

export default Logo;