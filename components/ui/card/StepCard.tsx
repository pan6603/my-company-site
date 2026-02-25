type StepCardProps = {
  step: number
  title: string
  description: string
}

export const STEPS: StepCardProps[] = [
  {
    step: 1,
    title: "Connect Your Stack",
    description:
      "Plug in your existing tools like Salesforce, Slack, and Jira with our simple auth wizard.",
  },
  {
    step: 2,
    title: "Automate Workflows",
    description:
      "Use our template library or build custom rules to handle repetitive data tasks and notifications.",
  },
  {
    step: 3,
    title: "Optimize & Scale",
    description:
      "Monitor performance and use AI suggestions to continuously refine and expand your operations.",
  },
]

export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="w-full max-w-[373px] h-[188px] flex flex-col items-center justify-between">
      <div className="w-full max-w-[64px] h-[96px] flex items-start justify-center">
        <div className="w-[64px] h-[64px] bg-blue-700 text-white rounded-full flex items-center justify-center">
          {step}
        </div>
      </div>

      <h4 className="text-center text-[#0F172A] font-bold text-xl">{title}</h4>

      <p className="max-w-[362px] text-center text-[#475569] text-base">
        {description}
      </p>
    </div>
  )
}