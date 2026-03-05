import SolutionsIndustryTitle from "../ui/title/SolutionsIndustryTitle"
import SolutionsIndustryCards from "../ui/card/SolutionsIndustryCards"

export default function SolutionsIndustrySection() {
    return (
        <>
            <div className="w-full max-w-[1280px] h-[465px] mt-20 flex flex-col items-center gap-8">
                <SolutionsIndustryTitle />
                <SolutionsIndustryCards />
            </div>
        </>
    )
}