import SolutionsHeroCTA from "../ui/card/SolutionsHeroCTA"


export default function SolutionsHereSection() {
    return (
        <>
            <div className="w-full max-w-[1440px] h-[472px] bg-[#FFFFFF] flex items-center justify-center">
                <div className="w-full max-w-[1280px] h-[247px] flex flex-col items-center justify-between">
                    <div className="w-full max-w-[1216px] h-[60px] flex items-center justify-center">
                        <h1 className="text-[60px] font-bold flex items-center justify-center">
                            Solutions for <span className="text-[#457DE4]">Every Industry.</span>
                        </h1>
                    </div>

                    <p className="text-[#475569]">
                        Tailored workflows and intelligent automation designed to meet the unique <br />
                        challenges of your specific industry. Scale your operations with confidence.
                    </p>

                    <SolutionsHeroCTA />
                </div>
            </div>
        </>
    )
}