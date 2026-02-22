import Link from "next/link";


export default function NavLinks() {
    return (
        <>
            <div className="w-full max-w-[330px] h-[20px] flex justify-between items-center">
                <Link href="" className="w-max h-[20px] text-[#475569] text-sm font-medium">Product</Link>
                <Link href="" className="w-max h-[20px] text-[#475569] text-sm font-medium">Solutions</Link>
                <Link href="" className="w-max h-[20px] text-[#475569] text-sm font-medium">Pricing</Link>
                <Link href="" className="w-max h-[20px] text-[#475569] text-sm font-medium">Resources</Link>
            </div>
        </>
    )
}