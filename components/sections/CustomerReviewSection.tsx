import IllustrationCard from "@/components/ui/card/IllustrationCard"
import TestimonialContent from "@/components/ui/content/TestimonialContent"


export default function CustomerReviewSection() {
    return (
        <>
            <div className="w-full max-w-[1440px] h-[687px] bg-[##F6F7F8] flex items-center justify-center">
                <div className="w-full max-w-[1216px] h-[527px] flex items-center justify-between">
                    <IllustrationCard />
                    <TestimonialContent />
                </div>
            </div>
        </>
    )
}