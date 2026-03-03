import SolutionsHereSection from "@/components/sections/SolutionsHereSection"
import SolutionsIndustrySection from "@/components/sections/SolutionsIndustrySection"


export default function SolutionsPage() {
    return (
        <>
            <div className="w-full max-w-[1440px] h-[3098px] bg-gray-100 flex flex-col items-center">
                <SolutionsHereSection />
                <SolutionsIndustrySection />
            </div>
        </>
    )
}