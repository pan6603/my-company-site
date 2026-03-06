import RatingStars from "@/components/ui/content/RatingStars"
import ResultsMetrics from "../row/ResultsMetrics"


export default function TestimonialContent() {
    return (
        <>
            <div className="w-full max-w-[676px] h-[399px] flex flex-col items-start justify-between">
                <RatingStars />
                <p className="text-[#0F172A] text-[30px] font-bold">
                    Switching to SaaSFlows Finance solution <br />
                    reduced our monthly closing cycle by 40%. <br />
                    The automated audit trails have been a <br />
                    lifesaver for our compliance team.
                </p>

                <div className="w-full max-w-[676px] h-[72px] flex flex-col items-start justify-center gap-1">
                    <h3 className="text-[#0F172A] text-lg font-bold">Sarah Jenkins</h3>
                    <p className="text-[#64748B]">VP of Finance, Global Horizon Group</p>
                </div>
                <ResultsMetrics />
            </div>
        </>
    )
}