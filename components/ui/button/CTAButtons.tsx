import Image from "next/image"
import PlayIcon from "../../../public/images/icons/play.png"



export default function CTAButtons() {
    return (
        <>
            <div className="w-full max-w-[584px] h-[74px] flex items-center gap-4">
                <button className="w-full max-w-[193px] h-[58px] bg-[#137FEC] text-[#FFFFFF] font-bold rounded-lg">
                    Get Started Free
                </button>
                <button className="w-full max-w-[254px] h-[58px] bg-[#FFFFFF] text-[#000000] flex items-center justify-center gap-2 font-bold rounded-lg border border-[#E2E8F0]">
                    <div className="w-full max-w-[24px] h-[28px] flex items-center justify-center">
                        <Image src={PlayIcon} alt="Play Icon" width={19} height={19} />
                    </div>
                    Watch Product Tour
                </button>
            </div>
        </>
    )
}