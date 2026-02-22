import logoIcon from "../../../public/images/logo.svg"
import Image from "next/image"
import Link from "next/link"

export default function FooterNavigation() {
    return (
        <>
            <div className="w-full max-w-[1216px] h-[176px] flex items-center justify-between">
                <div className="w-full max-w-[457px] h-[176px] flex flex-col gap-6">
                    <div className="w-full max-w-[457px] h-[28px] flex items-center gap-2">
                        <Image 
                            src={logoIcon}
                            alt="Logo"
                            width={23}
                            height={23}
                        />
                        <span className="text-[#0F172A] text-xl font-bold cursor-pointer">SaaSFlow</span>
                    </div>

                    <div className="w-full max-w-[384px] h-[72px]">
                        <p className="text-[#6B7280] text-sm">
                            Making enterprise-grade workflow automation <br /> accessible to teams of all sizes. Built for <br /> efficiency, designed for growth.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[204px] h-[176px] flex flex-col items-center justify-between">
                    <div className="w-full max-w-[204px] h-[24px] text-[#0F172A] font-bold">Product</div>
                    <div className="w-full max-w-[204px] h-[128px] flex flex-col items-center justify-between">
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/terms">Features</Link>
                        </div>
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/privacy">Integrations</Link>
                        </div>
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/cookies">Enterprise</Link>
                        </div>
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/cookies">Solutions</Link>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[204px] h-[176px] flex flex-col items-center justify-between">
                    <div className="w-full max-w-[204px] h-[24px] text-[#0F172A] font-bold">Company</div>
                    <div className="w-full max-w-[204px] h-[128px] flex flex-col items-center justify-between">
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/terms">About Us</Link>
                        </div>
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/privacy">Careers</Link>
                        </div>
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/cookies">Blog</Link>
                        </div>
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/cookies">Contact</Link>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[204px] h-[176px] flex flex-col gap-6">
                    <div className="w-full max-w-[204px] h-[24px] text-[#0F172A] font-bold">Legal</div>
                    <div className="w-full max-w-[204px] h-[92px] flex flex-col items-center justify-between">
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/terms">Privacy</Link>
                        </div>
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/privacy">Terms</Link>
                        </div>
                        <div className="w-full max-w-[204px] h-[20px] flex items-center">
                            <Link className="text-[#64748B]" href="/cookies">Security</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}