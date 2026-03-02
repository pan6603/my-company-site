"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <>
            <div className="w-full max-w-[330px] h-[20px] flex justify-between items-center">
                <Link
                    href="/product"
                    className={`w-max h-[20px] text-sm font-medium ${isActive("/product")
                    ? "text-blue-600"
                    : "text-[#475569]"
                    }`}
                    >
                        Product
                    </Link>
                    
                <Link 
                    href="/solutions" 
                    className={`w-max h-[20px] text-sm font-medium ${isActive("/solutions")
                    ? "text-blue-600"
                    : "text-[#475569]"
                    }`}>
                        Solutions
                    </Link>
                <Link href="" className="w-max h-[20px] text-[#475569] text-sm font-medium">Pricing</Link>
                <Link href="" className="w-max h-[20px] text-[#475569] text-sm font-medium">Resources</Link>
            </div>
        </>
    )
}