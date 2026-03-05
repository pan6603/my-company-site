import Image from "next/image"
import CheckIcon from "../../../public/images/icons/check.svg"

interface SolutionCardProps {
  icon: string
  title: string
  description: string
  features: string[]
}

export default function SolutionCard({
    icon,
    title,
    description,
    features
}: SolutionCardProps){
  return (
    <div className="w-full max-w-[373px] h-[274px] flex flex-col justify-between">
        <div className="w-full max-w-[373px] h-[40px] flex gap-3 items-center">
            <div className="w-full max-w-[40px] h-[40px] bg-[#137FEC] rounded-full flex items-center justify-center">
                <Image src={icon} alt="Users_Group" width={24} height={32} />
            </div>
            <h1 className="text-[#0F172A] font-bold text-2xl">{title}</h1>
        </div>

        <p className="w-full max-w-[373px] h-[78px] text-[#475569] text-base">{description}</p>

        <div className="w-full max-w-[373px] h-[108px] flex flex-col justify-between">
            {features.map((feature, index) => ( 
                
                <div className="w-full max-w-[373px] h-[28px] flex items-center gap-3" key={index}>
                    <Image src={CheckIcon} alt="check_icon" width={20} height={24} />
                    {feature}
                </div>
                
            ))}

        </div>
    </div>
  )
}