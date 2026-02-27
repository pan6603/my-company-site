import Image from "next/image"
import detailedProductImage from "../../public/images/icons/detailed_product.svg"


export default function ProductHeroSection() {
    return (
        <section className="w-full max-w-[896px] h-[1153px] mt-[30px] flex flex-col items-center justify-between">
            <h1 className="w-full max-w-[896px] h-[144px] font-bold text-[52px] text-center">
                Powerful features to<br />
                <span className="text-[#137FEC]">elevate your output.</span>
            </h1>
            <p className="w-full max-w-[672px] h-[65px] text-[#475569] flex items-center justify-center text-center">
                A comprehensive suite of tools designed to automate the mundane <br />
                and focus your team on high-impact work.
            </p>
            <div className="w-full max-w-[896px] h-[880px] flex items-center justify-center">
                <Image src={detailedProductImage} alt="Detailed Product Image" width={862} height={862} />
            </div>
        </section>
    )
}