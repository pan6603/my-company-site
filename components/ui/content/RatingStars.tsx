import StarIcon from "@/components/ui/icon/StarIcon"


export default function RatingStars() {
    return (
        <>
            <div className="w-full max-w-[676px] h-[28px] flex items-center justify-start gap-[4px]">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
        </>
    )
}