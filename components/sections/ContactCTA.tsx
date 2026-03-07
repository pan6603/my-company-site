import ContactCTAButton from "../ui/button/ContactCTAButton"


export default function ContactCTA() {
    return (
        <div className="w-full max-w-[1216px] h-[386px] bg-[#137FEC] m-auto rounded-2xl flex items-center justify-center">
            <div className="w-full max-w-[672px] h-[258px] flex flex-col items-center justify-between">
                <h2 className="text-[#FFFFFF] text-4xl w-full max-w-[571px] h-[80px] text-center">Need a custom solution for your industry?</h2>
                <p className="text-[#FFFFFF] text-lg text-center">Our solutions experts are ready to build a workflow that fits your specific business requirements. Let s discuss your roadmap.</p>

                <ContactCTAButton />
            </div>
        </div>
    )
}