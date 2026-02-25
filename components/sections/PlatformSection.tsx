import IntegrationCard from "@/components/ui/card/IntegrationCard";
import cloudIcon from "../../public/images/cards/cloud.svg";
import growthIcon from "../../public/images/cards/growth.svg";
import listIcon from "../../public/images/cards/list.svg";
import lockIcon from "../../public/images/cards/lock.svg";
import sparklesIcon from "../../public/images/cards/sparkles.svg";
import webhookIcon from "../../public/images/cards/webhook.svg";


const INTEGRATIONS = [
  { 
    title: "RESTful API", 
    desc: "Full CRUD operations",
    icon: sparklesIcon
  },
  { 
    title: "Webhooks", 
    desc: "Real-time event data",
    icon: webhookIcon
  },
  { 
    title: "Cloud SDK", 
    desc: "Python, JS & Go",
    icon: listIcon
  },
  { 
    title: "AES-256", 
    desc: "Data encryption",
    icon: lockIcon
  },
  { 
    title: "Multi-Cloud", 
    desc: "AWS, Azure, GCP",
    icon: cloudIcon
  },
  { 
    title: "99.9% Uptime", 
    desc: "SLA guaranteed",
    icon: growthIcon
  },
]

export default function PlatformSection() {
    return (
        <section className="w-full max-w-[1440px] h-[532px] bg-[#F8FAFC] flex items-center justify-center">
            <div className="w-full max-w-[1216px] h-[340px] flex items-center justify-between">
                <div className="w-full max-w-[373px] h-[340] bg-blue-700">

                </div>

                <div className="w-full max-w-[794px] h-[340] grid grid-cols-3 gap-6">
                     {INTEGRATIONS.map((item) => (
                        <IntegrationCard
                            key={item.title}
                            title={item.title}
                            desc={item.desc}
                            icon={item.icon}
                        />
                    ))}
                
                </div>
            </div>
        </section>
    )
}