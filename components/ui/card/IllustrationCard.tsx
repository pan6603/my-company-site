import CustomerSuccessPotraitIcon from "../../../public/images/cards/customer_success_portrait.svg"
import Image from "next/image"


export default function IllustrationCard() {
    return (
        <>
            <div className="w-full max-w-[378px] h-[272px] bg-blue-200 rounded-lg flex items-center">
                <Image src={CustomerSuccessPotraitIcon} alt="customer success portrait icon" width={256} height={256}/>
            </div>
        </>
    )
}