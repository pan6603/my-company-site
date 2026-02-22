import Navbar from "@/components/layout/navbar/Navbar"
import Footer from "@/components/layout/footer/Footer"
import Main from "@/components/layout/main/Main"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full max-w-[1440px] h-[3027px] flex flex-col">
                <Navbar />

                <Main>{children}</Main>

                <Footer />
            </div>
        </>
    )
}