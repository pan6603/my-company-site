import MetricItem from "@/components/ui/item/MetricItem"


export default function ResultsMetrics() {
    return (
        <>
            <div className="w-full max-w-[676px] h-[89px] flex items-end justify-between">
                <MetricItem 
                    value="40%"
                    label="Faster Close"
                />
                <MetricItem 
                    value="$2.4M"
                    label="Annual Savings"
                />
                <MetricItem 
                    value="100%"
                    label="Audit Compliance"
                />
            </div>
        </>
    )
}