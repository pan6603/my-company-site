import PlatformSection from "@/components/sections/PlatformSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CTA from "@/components/sections/CTA";



export default function ProductPage() {
    return (
        <>
            <div className="w-full max-w-[1440px] h-[5291px] bg-gray-100">
                <PlatformSection />
                <HowItWorksSection />
                <CTA 
                    title="Experience the future of enterprise agility."
                    description="Join 10,000+ teams automating their success. No credit card required to start."
                    primaryText="Start Your 14-Day Free Trial"
                    secondaryText="Talk to Our Experts"
                />
            </div>
        </>
    )
}