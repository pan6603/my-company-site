interface MainProps {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <main className="w-full max-w-[1440px] h-[2572px]">
      {children}
    </main>
  )
}