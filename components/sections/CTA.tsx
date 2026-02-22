



export default function CTA() {
    return (
        <>
            <div className="w-full max-w-[1216px] h-[346px] bg-[#137FEC] rounded-3xl mt-[65px] m-auto flex justify-center items-center">
                <div className="w-full max-w-[672px] h-[218px] flex flex-col justify-between items-center">
                    <div className="w-full max-w-[672px] h-[40px] text-[#FFFFFF] text-4xl flex justify-center items-center">
                        Ready to transform your workflow?
                    </div>

                    <div className="w-full max-w-[672px] h-[56px] text-center text-[#FFFFFF] text-lg">
                        Join thousands of teams who trust SaaSFlow to power their business. Start <br />
                        your 14-day free trial today.
                    </div>

                    <div className="w-full max-w-[672px] h-[74px] flex justify-center items-center gap-2">
                        <button className="w-full max-w-[180px] h-[58px] bg-[#FFFFFF] text-[##137FEC] font-bold text-base rounded-lg cursor-pointer">
                            Start Free Trial
                        </button>
                        <button className="w-full max-w-[176px] h-[58px] bg-[#137FEC] text-[#FFFFFF] border border-white font-bold text-base rounded-lg cursor-pointer">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}