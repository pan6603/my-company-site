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
      <CTA />
    </>
  );
}
