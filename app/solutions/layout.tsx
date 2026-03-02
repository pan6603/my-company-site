import Navbar from "@/components/layout/navbar/Navbar"
import Footer from "@/components/layout/footer/Footer"


export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-[1440px] h-[5746px] bg-yellow-600">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}