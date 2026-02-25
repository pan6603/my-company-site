import Image, { StaticImageData } from "next/image"

type IntegrationCardProps = {
  title: string
  desc: string
  icon: StaticImageData
}


export default function IntegrationCard({ title, desc, icon, }: IntegrationCardProps) {
    return (
        <>
            <div className="w-full max-w-[248px] h-[158px] bg-[#FFFFFF] rounded-lg flex flex-col items-center justify-center">
                <div className="w-full max-w-[48px] h-[64px]">
                    <div className="w-full max-w-[48px] h-[48px] bg-[#F8FAFC] rounded-lg flex items-center justify-center">
                        <Image src={icon} alt={title} width={24} height={28} />
                    </div>
                </div>
                <h4 className="text-lg font-semibold mt-4">{title}</h4>
                <p className="text-sm text-gray-600 mt-2">{desc}</p>
            </div>
        </>
    )
}