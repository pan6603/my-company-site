import SolutionCard from "../ui/card/SolutionCard"
import UsersGroupIcon from "../../public/images/icons/users_group.svg"
import DevelopersIcon from "../../public/images/icons/developers.svg"
import ExecutivesIcon from "../../public/images/icons/executives.svg"

export default function SolutionsUseCaseSection() {
    return (
        <>
            <section className="w-full max-w-[1440px] h-[576px] bg-[#FFFFFF] flex items-center justify-center">
                <div className="w-full max-w-[1280px] h-[414px] flex flex-col justify-between">
                    <div className="w-full max-w-[768px] h-[76px] ml-8 flex flex-col justify-between">
                        <h4 className="text-[#137FEC] text-base font-bold">Tailored Experiences</h4>
                        <h2 className="text-[#0F172A] text-4xl font-bold">One platform, multiple perspectives.</h2>
                    </div>

                    <div className="w-full max-w-[1216px] h-[274px] ml-8 flex items-center justify-between">
                        <SolutionCard
                            icon={UsersGroupIcon}
                            title="For Managers"
                            description="Gain high-level visibility into team bandwidth and project health. Automate routine approvals to focus on strategic growth."
                            features={[
                                "Team capacity planning",
                                "Automated status reports",
                                "Budget tracking dashboards"
                            ]}
                        />

                        <SolutionCard
                            icon={DevelopersIcon}
                            title="For Developers"
                            description="Spend less time in meetings and more time coding. Integrate with Git workflows and automate deployment notifications."
                            features={[
                                "API-first architecture",
                                "Custom webhook triggers",
                                "Automated documentation"
                            ]}
                        />

                        <SolutionCard
                            icon={ExecutivesIcon}
                            title="For Executives"
                            description="Drive organizational alignment with company-wide OKR tracking. Secure, scalable, and built for enterprise-grade governance."
                            features={[
                                "Strategic roadmap visualization",
                                "Global compliance monitoring",
                                "ROI analysis tools"
                            ]}
                        />
                 
                    </div>
                </div>
            </section>
        </>
    )
}