import Image, { StaticImageData } from "next/image"

import BarChartIcon from "../../public/images/icons/bar-chart.svg"
import FileTextIcon from "../../public/images/icons/file-text.svg"
import UserIcon from "../../public/images/icons/users.svg"
import SecurityIcon from "../../public/images/icons/security.svg"
import LayoutGridIcon from "../../public/images/icons/layout-grid.svg"
import TrendingUpIcon from "../../public/images/icons/trending-up.svg"

type Feature = {
  icon: StaticImageData
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    icon: BarChartIcon,
    title: "Real-time Analytics",
    description:
      "Track performance metrics as they happen with our live dashboard. Make data-driven decisions in seconds.",
  },
  {
    icon: UserIcon,
    title: "Team Collaboration",
    description:
      "Centralized workspace for seamless communication. Mention teammates, share files, and update statuses instantly.",
  },
  {
    icon: SecurityIcon,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and SOC2 compliance. Your data is protected by the most advanced security protocols.",
  },
  {
    icon: LayoutGridIcon,
    title: "API Integration",
    description:
      "Connect with over 200+ existing tools in your stack. Automate data flow between Slack, Salesforce, and more.",
  },
  {
    icon: FileTextIcon,
    title: "Automated Reporting",
    description:
      "Generate stakeholder reports in seconds. Use custom templates to present your progress professionally.",
  },
  {
    icon: TrendingUpIcon,
    title: "Scalable Infrastructure",
    description:
      "Built to grow with your business. From your first 10 customers to global enterprise scale.",
  },
]

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-4">
      
      {/* Icon */}
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <Image src={icon} alt={title} width={20} height={20} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#475569] text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default function FeaturesGrid() {
  return (
    <div className="w-full max-w-[1440px] h-[1076px] bg-white py-24 flex items-center justify-center">

        <div className="w-full max-w-[1280px] h-[820px] flex flex-col justify-between items-center">

            <div className="w-full max-w-[768px] h-[180px] flex flex-col items-center justify-between">
                <div className="w-full max-w-[768px] h-[24px] flex items-center justify-center">
                    <h2 className="text-[#137FEC] font-bold text-base">Powerful Features</h2>
                </div>

                <div className="w-full max-w-[768px] h-[80px]">
                    <h1 className="text-[#0F172A] text-4xl text-center font-bold">
                        Everything you need to scale your <br />business operations
                    </h1>
                </div>
                <div className="w-full max-w-[768px] h-[52px]">
                    <p className="text-center text-[#475569]">Stop juggling multiple tools. SaaSFlow brings your entire team, data, and workflows into one unified, <br />
                        secure platform designed for speed.
                    </p>
                </div>
            </div>

            <div className="max-w-[1216px] mx-auto grid grid-cols-3 gap-8">
                {FEATURES.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
            </div>
        </div> 

 
    </div>
  )
}