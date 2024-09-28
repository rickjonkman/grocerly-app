"use client";

import React, {useState} from 'react';
import Image from "next/image";
import ProfileIcon from "../assets/images/profile-icon.svg";
import HamIcon from "../assets/images/ham-icon.svg";
import {UserButton} from "@clerk/nextjs";

const NavIcons = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleHamClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex justify-between items-center gap-2 h-full">
            <UserButton/>

            <Image src={HamIcon} alt="Hamburger Icon, click to open navigation menu"
                   className="h-7 md:hidden cursor-pointer" onClick={handleHamClick}/>
        </div>
    );
};

export default NavIcons;