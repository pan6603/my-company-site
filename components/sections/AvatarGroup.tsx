import Image from "next/image"
import UserProfileIcon_1 from "../../public/images/profiles/user_profile_1.svg"
import UserProfileIcon_2 from "../../public/images/profiles/user_profile_2.svg"
import UserProfileIcon_3 from "../../public/images/profiles/user_profile_3.svg"

export default function AvatarGroup() {
    return (
        <>
            <div className="w-full max-w-[584px] h-[40px] flex items-center gap-2">
                <div className="w-full max-w-[80px] h-[32px] relative">
                    <Image src={UserProfileIcon_1} alt="user_profile_1" className="absolute top-0 left-0" width={32} height={32} />
                    <Image src={UserProfileIcon_2} alt="user_profile2" className="absolute top-0 left-6" width={32} height={32} />
                    <Image src={UserProfileIcon_3} alt="user_profile3" className="absolute top-0 left-11" width={32} height={32} />
                 </div>
                 <span className="text-[#64748B] text-sm">Joined by 10,000+ companies worldwide</span>
            </div>
        </>
    )
}