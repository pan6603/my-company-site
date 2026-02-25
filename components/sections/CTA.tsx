
type CTAProps = {
  title: string
  description: string
  primaryText: string
  secondaryText: string
}


export default function CTA({
    title,
    description,
    primaryText,
    secondaryText,
}: CTAProps) {
    return (
        <>
            <div className="w-full max-w-[1216px] h-[346px] bg-[#137FEC] rounded-3xl mt-[65px] m-auto flex justify-center items-center">
                <div className="w-full max-w-[672px] h-[218px] flex flex-col justify-between items-center">
                    <div className="w-full max-w-[672px] h-[40px] text-[#FFFFFF] text-4xl flex justify-center items-center">
                        {title}
                    </div>

                    <div className="w-full max-w-[672px] h-[56px] text-center text-[#FFFFFF] text-lg">
                        {description}
                    </div>

                    <div className="w-full max-w-[672px] h-[74px] flex justify-center items-center gap-2">
                        <button className="w-max h-[58px] bg-[#FFFFFF] text-[##137FEC] font-bold text-base rounded-lg cursor-pointer px-8 py-[17px]">
                            {primaryText}
                        </button>
                        <button className="w-full max-w-[176px] h-[58px] bg-[#137FEC] text-[#FFFFFF] border border-white font-bold text-base rounded-lg cursor-pointer">
                            {secondaryText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}