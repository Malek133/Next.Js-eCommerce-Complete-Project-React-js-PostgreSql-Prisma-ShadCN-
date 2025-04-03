import { ModeToggle } from "@/components/component/ModeToggle";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col h-screen">
            {/* <Header/> */}
            <ModeToggle />
           
            <main className="flex-1 wrapper">
                
                {children}
            </main>
            {/* <Footer/> */}
        </div>
    );
}