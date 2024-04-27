import {Navbar} from "../(landing)/_components/Navbar";
const page = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <header className="w-[100%]">
                <nav className="w-[100%]">{<Navbar/>}</nav>
            </header>
            <main className="h-full relative">
                {children}
            </main>
        </div>
    )
}
export default page;