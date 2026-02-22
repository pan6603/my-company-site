import SubFooter from "./SubFooter"
import FooterNavigation from "./FooterNavigation"

export default function Footer() {
    return (
        <>
            <footer className="w-full max-w-[1440px] h-[390px] bg-[#FFFFFF] border-t border-[#E3E8EF] pt-16 pb-8 px-20">
                <div className="w-full max-w-[1280px] h-[293px] flex flex-col items-center justify-between">
                    <FooterNavigation />
                    <SubFooter />
                </div>
            </footer>
        </>
    )
}