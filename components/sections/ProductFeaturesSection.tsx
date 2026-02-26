import Image, { type StaticImageData } from "next/image"
import WorkFlowAutomationViewIcon from "../../public/images/icons/workflow_automation_view.svg"
import workFlowIcon from "../../public/images/icons/workflow.svg"
import checkIcon from "../../public/images/icons/check.svg"
import analyticsDashboardIcon from "../../public/images/icons/analytics_dashboard_view.svg"
import analyticsIcon from "../../public/images/icons/analytics.svg"
import securityComplianceIcon from "../../public/images/icons/security_compliance_view.svg"

type Feature = {
  title: string
  description: React.ReactNode
  icon: StaticImageData
  image: { src: StaticImageData; alt: string }
  bullets: string[]
  reverse?: boolean // 이미지/텍스트 좌우 반전
}

function FeatureText({
  icon,
  title,
  description,
  bullets,
}: {
  icon: StaticImageData
  title: string
  description: React.ReactNode
  bullets: string[]
}) {
  return (
    <div className="w-full max-w-[560px] h-[362px] flex flex-col items-start justify-between">
      <div className="w-full max-w-[48px] h-[48px] bg-blue-100 rounded-lg flex items-center justify-center">
        <Image src={icon} alt={`${title} Icon`} width={24} height={28} />
      </div>

      <h3 className="w-full max-w-[560px] h-[36px] flex items-center justify-start text-[#0F172A] text-3xl font-bold">
        {title}
      </h3>

      <div className="w-full max-w-[560px] h-[88px] text-[#475569] flex items-center">
        {description}
      </div>

      <div className="w-full max-w-[560px] h-[118px] flex flex-col items-start justify-between">
        {bullets.map((text) => (
          <div key={text} className="w-full max-w-[560px] h-[26px] flex items-center gap-2">
            <Image src={checkIcon} alt="Check Icon" width={24} height={24} />
            <p className="text-[#334155] text-base">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function FeatureItem({ feature }: { feature: Feature }) {
  const ImageBlock = (
    <div className="w-full max-w-[560px] h-[560px] flex items-center justify-center">
      <Image src={feature.image.src} alt={feature.image.alt} width={560} height={560} />
    </div>
  )

  const TextBlock = (
    <FeatureText
      icon={feature.icon}
      title={feature.title}
      description={feature.description}
      bullets={feature.bullets}
    />
  )

  return (
    <div className="w-full max-w-[1216px] h-[592px] flex items-center justify-between">
      {feature.reverse ? (
        <>
          {ImageBlock}
          {TextBlock}
        </>
      ) : (
        <>
          {TextBlock}
          {ImageBlock}
        </>
      )}
    </div>
  )
}

const FEATURES: Feature[] = [
  {
    title: "Visual Workflow Builder",
    icon: workFlowIcon,
    image: { src: WorkFlowAutomationViewIcon, alt: "Feature 1" },
    description: (
      <>
        Drag and drop your way to complex automations. Our intuitive <br />
        canvas lets you map out entire business processes without <br />
        writing a single line of code.
      </>
    ),
    bullets: ["Conditional logic & branching", "Over 50+ pre-built triggers", "Real-time error debugging"],
    reverse: true, // (원래: 이미지 왼쪽, 텍스트 오른쪽)
  },
  {
    title: "Advanced Predictive Analytics",
    icon: analyticsIcon,
    image: { src: analyticsDashboardIcon, alt: "Analytics Dashboard" },
    description: (
      <>
        Dont just react—predict. Our AI-driven insights engine analyzes <br />
        your team historical data to forecast bottlenecks and identify <br />
        optimization opportunities.
      </>
    ),
    bullets: ["Resource allocation forecasting", "Custom KPI dashboards", "Automated executive summaries"],
    reverse: false, // (원래: 텍스트 왼쪽, 이미지 오른쪽)
  },
  {
    title: "Governance & Compliance",
    icon: analyticsIcon, // 원본 코드 그대로 유지(원하면 다른 아이콘으로 바꾸면 됨)
    image: { src: securityComplianceIcon, alt: "Security Compliance" },
    description: (
      <>
        Built for the enterprise, SaaSFlow meets the strictest security <br />
        standards. Maintain full control over data residency, <br />
        access logs, and granular user permissions.
      </>
    ),
    bullets: ["SOC2 Type II & GDPR compliant", "Single Sign-On (SSO) & SAML", "Full audit logging & versioning"],
    reverse: true, // (원래: 이미지 왼쪽, 텍스트 오른쪽)
  },
]

export default function ProductFeaturesSection() {
  return (
    <section className="w-full max-w-[1440px] h-[2204px] flex items-end justify-center">
      <div className="w-full max-w-[1280px] h-[2108px] flex flex-col items-center justify-between">
        <div className="w-full max-w-[1216px] h-[76px] flex flex-col items-center justify-between">
          <h3 className="w-full max-w-[1216px] h-[20px] flex items-center justify-center text-[#137FEC]">
            Core Capabilities
          </h3>
          <h2 className="w-full max-w-[1216px] h-[40px] flex items-center justify-center text-3xl font-bold text-[#0F172A]">
            Precision Engineering for Modern Teams
          </h2>
        </div>

        {/* 기존 첫 블록만 높이가 560이라면, 아래처럼 별도 처리도 가능하지만
            지금은 통일해서 592로 맞춰 FeatureItem으로 렌더링합니다. */}
        {FEATURES.map((feature) => (
          <FeatureItem key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  )
}