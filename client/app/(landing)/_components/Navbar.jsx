import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export const Navbar = () => {
    return (
        <div className="absolute top-0 z-50 w-[100%] bg-gradient-to-tr h-14 from-neutral-900 to-neutral-900">
            <div className="flex justify-between w-[100%] items-center" style={{ justifyContent: "space-between", padding: "10px 30px" }}>
                <div>
                    <Link href="./" className="text-white font-aclonica"> TaskMaster</Link>
                </div>
                <div>
                    <Link href="/sign-in" className={buttonVariants({ variant: "secondary" })}>LogIn</Link>
                </div>
            </div>
        </div>
    )
}
