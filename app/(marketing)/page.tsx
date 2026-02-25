import HeroSection from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <FeaturesGrid />
      <CTA 
        title="Ready to transform your workflow?"
        description="Join thousands of teams who trust SaaSFlow to power their business. Start your 14-day free trial today."
        primaryText="Start Free Trial"
        secondaryText="Contact Sales"
      />
      
    </>
  );
}
