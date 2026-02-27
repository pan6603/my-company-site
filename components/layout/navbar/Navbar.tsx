"use client";

import Brand from "./Brand"
import NavLinks from "./NavLinks"
import NavActions from "./NavActions"

export default function Navbar() {
    return (
        <>
            <header className="w-full max-w-[1440px] h-[65px] bg-[#FDFDFD] border-b border-[#E5E9F0] flex justify-center items-center">
                <div className="w-full max-w-[1216px] h-[64px] bg-[#FDFDFD] flex justify-between items-center">
                    <Brand />
                    <NavLinks />
                    <NavActions />
                </div>
            </header>
        </>
    )
}