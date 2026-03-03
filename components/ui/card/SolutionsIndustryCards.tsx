import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import MarketingIcon from "../../../public/images/cards/marketing.svg";
import FinanceIcon from "../../../public/images/cards/finance.svg";
import TechIcon from "../../../public/images/cards/tech.svg";
import HumanResourcesIcon from "../../../public/images/cards/human_resources.svg";
import CTA_ArrowIcon from "../../../public/images/cta/CTA_arrow.svg";

type Card = {
  title: string;
  description: string;
  icon: StaticImageData;
  iconAlt: string;
  href: string;
};

const CARDS: Card[] = [
  {
    title: "Marketing",
    description:
      "Automate campaign tracking,\nasset management, and\nperformance reporting across all channels.",
    icon: MarketingIcon,
    iconAlt: "Marketing",
    href: "",
  },
  {
    title: "Finance",
    description:
      "Securely manage audits,\nexpense approvals, and\nfinancial forecasting with full\ncompliance tracking.",
    icon: FinanceIcon,
    iconAlt: "Finance",
    href: "",
  },
  {
    title: "Human Resources",
    description:
      "Streamline onboarding,\nemployee performance reviews,\nand internal communications\nseamlessly.",
    icon: HumanResourcesIcon,
    iconAlt: "Human Resources",
    href: "",
  },
  {
    title: "Tech & IT",
    description:
      "Manage agile sprints, incident\nreporting, and infrastructure\nscaling in one centralized hub.",
    icon: TechIcon,
    iconAlt: "Tech & IT",
    href: "",
  },
];

function SolutionCard({ title, description, icon, iconAlt, href }: Card) {
  return (
    <div className="w-full max-w-[280px] h-[325px] bg-white rounded-lg p-8 flex flex-col justify-between">
      <div className="w-[56px] h-[56px] bg-blue-100 rounded-lg flex items-center justify-center">
        <Image src={icon} alt={iconAlt} width={30} height={24} />
      </div>

      <h2 className="text-[#0F172A] text-xl font-bold">{title}</h2>

      <p className="text-[#475569] text-sm whitespace-pre-line">{description}</p>

      <Link href={href} className="text-[#137FEC] w-max h-max flex items-center gap-2">
        Learn More
        <Image src={CTA_ArrowIcon} alt="CTA Arrow" width={16} height={20} />
      </Link>
    </div>
  );
}

export default function SolutionsIndustryCards() {
  return (
    <div className="w-full max-w-[1216px] h-[325px] flex items-center justify-between">
      {CARDS.map((card) => (
        <SolutionCard key={card.title} {...card} />
      ))}
    </div>
  );
}