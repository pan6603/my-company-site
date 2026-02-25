import StepCard, { STEPS } from "@/components/ui/card/StepCard"

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white flex items-center justify-center">
      <div className="w-full max-w-[1440px] h-[564px] flex items-center justify-center">
        <div className="w-full max-w-[1280px] h-[372px] flex flex-col items-center justify-between">
          {/* Header */}
          <div className="w-full max-w-[1216px] flex flex-col items-center gap-4">
            <h2 className="text-[#0F172A] text-4xl font-bold text-center">
              Get running in minutes
            </h2>

            <p className="max-w-[672px] text-center text-[#475569]">
              Implementing a new enterprise tool shouldn&apos;t take months.
              We&apos;ve streamlined onboarding to ensure you see ROI from day
              one.
            </p>
          </div>

          {/* Steps */}
          <div className="w-full max-w-[1216px] h-[188px] flex items-center justify-between">
            {STEPS.map((item) => (
              <StepCard
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}