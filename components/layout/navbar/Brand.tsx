import Image from "next/image"
import logoIcon from "../../../public/images/logo.svg"
import Link from "next/link"

export default function Brand() {
    return (
        <>
            <Link href="/" className="w-full max-w-[133px] h-[32px] flex justify-between items-center">
                <div className="w-full max-w-[32px] h-[32px cursor-pointer">
                    <Image 
                        src={logoIcon}
                        alt="Logo"
                        width={30}
                        height={30}
                    />
                </div>

                <span className="text-[#0F172A] text-xl font-bold cursor-pointer">SaaSFlow</span>
            </Link>
        </>
    )
}