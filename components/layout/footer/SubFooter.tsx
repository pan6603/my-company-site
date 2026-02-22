import Link from "next/link";


export default function SubFooter() {
    return (
        <>
            <div className="w-full max-w-[1216px] h-[53px] flex items-end justify-between">
                <div className="w-full max-w-[276px] h-[20px flex items-center justify-center">
                    <p className="text-[#64748B] text-sm">© 2024 SaaSFlow Inc. All rights reserved.</p>
                </div>


                <div className="w-full max-w-[198px] h-[20px flex items-center justify-between">
                    <Link href="/twiter" className="text-[#64748B]">Twiter</Link>
                    <Link href="/linkedin" className="text-[#64748B]">Linkedin</Link>
                    <Link href="/github" className="text-[#64748B]">Github</Link>
                </div>
            </div>
        </>
    )

}