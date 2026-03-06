


export default function MetricItem({value, label}: {value?: string, label?: string}) {
    return (
        <>
            <div className="w-full max-w-[204px] h-[56px] flex flex-col items-start justify-center gap-1">
                <h1 className="text-[#137FEC] text-3xl font-bold">{value}</h1>
                <p className="text-[#64748B]">{label}</p>
            </div>
        </>
    )
}