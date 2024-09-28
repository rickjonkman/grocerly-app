import React from 'react';
import NavBar from "@/app/components/NavBar";
import NavIcons from "@/app/components/NavIcons";
import {SignedIn} from "@clerk/nextjs";
import Logo from "@/app/components/Logo";

function Header() {

    return <div className="w-full">
        <div className="flex justify-between items-center mt-4 px-4 sm:px-8 lg:px-16 h-10 lg:h-12">
            <Logo />

            <SignedIn>
                <NavBar />
                <NavIcons />
            </SignedIn>
        </div>
    </div>
}

export default Header;