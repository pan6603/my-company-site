import SolutionsHereSection from "@/components/sections/SolutionsHereSection"
import SolutionsIndustrySection from "@/components/sections/SolutionsIndustrySection"
import SolutionsUseCaseSection from "@/components/sections/SolutionsUseCaseSection"
import CustomerReviewSection from "@/components/sections/CustomerReviewSection"

export default function SolutionsPage() {
    return (
        <>
            <div className="w-full max-w-[1440px] h-[3098px] bg-gray-100 flex flex-col items-center">
                <SolutionsHereSection />
                <SolutionsIndustrySection />
                <SolutionsUseCaseSection />
                <CustomerReviewSection />
            </div>
        </>
    )
}