import React from 'react';
import Logo from "../assets/images/logo.svg";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import NavIcons from "@/app/components/NavIcons";
import {SignedIn} from "@clerk/nextjs";

function Header() {
    return <div className="w-full">
        <div className="flex justify-between items-center m-4 h-10">
            <Image src={Logo} alt="Grocerly Logo, click to go back to home" className="h-full w-auto" />

            <SignedIn>
                <NavBar />
                <NavIcons />
            </SignedIn>
        </div>
    </div>
}

export default Header;