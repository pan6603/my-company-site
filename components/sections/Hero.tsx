import ProfuctDashboard from "../../public/images/icons/product_dashboard.svg"
import CTAButtons from "../ui/button/CTAButtons"
import AvatarGroup from "./AvatarGroup"
import Image from "next/image"

export default function Hero() {
    return (
        <>
            <div className="w-full max-w-[1440px] h-[808px] bg-[#F6F7F8] flex items-center justify-center">
                <div className="w-full max-w-[1216px] h-[584px] flex items-center justify-between">
                    <div className="w-full max-w-[584px] h-[574px] flex flex-col justify-between">

                        <div className="w-full max-w-[584px] h-[300px]">
                            <span className="text-[#0F172A] font-bold text-6xl">
                                Streamline your enterprise <br />workflow with
                            </span>
                            <br />
                            <span className="text-[#137FEC] font-bold text-6xl">intelligent automation.</span>
                        </div>

                        <div className="w-full max-w-[584px] h-[88px] flex items-center text-[#475569] text-lg">
                            The all-in-one platform for modern teams to manage projects, track <br />
                            growth, and scale operations without the complexity of traditional <br/>
                            enterprise software.
                        </div>

                       <CTAButtons />
                       <AvatarGroup />
                   
                    </div>

                    <div className="w-full max-w-[584px] h-[584px]">
                        <div className="w-full max-w-[584px] h-[584px] rounded-3xl backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex items-center justify-center">
                            <Image className="rounded-3xl" src={ProfuctDashboard} alt="Product Dashboard" width={584} height={584} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}