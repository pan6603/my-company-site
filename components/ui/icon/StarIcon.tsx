"use client"
import StartIcon from "../../../public/images/icons/star_icon.svg"
import Image from "next/image"  


export default function StarIcon() {
    return (
        <>
            <div className="w-full max-w-[24px] h-[28px]">
                <Image src={StartIcon} alt="star icon" width={24} height={28} />
            </div>
        </>
    )
}