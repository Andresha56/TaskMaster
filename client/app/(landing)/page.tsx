import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
const page =()=>{
  return(
    <>
    <div className="bg-gradient-to-tr from-neutral-900 to-neutral-800 h-full">
      <div className="absolute top-0  -mt-[93px] -mr-[176px] w-[200px] h-[300px] md:min-w-[400px] md:min-h-[400px] rounded-full bg-gradient-to-b from-sky-400 blur-3xl opacity-25 z-50 overflow-hidden"></div>
      <div className=" flex justify-center items-center h-full text-center md:min-w-[40rem] w-5/6 m-auto flex-col">
        <h1 className="font-aclonica text-5xl md:text-6xl text-neutral-100 mb-4 ">
          Stay Organized With Our Intuitive Task Manager</h1> 
          <p className="w-4/5 font-sans text-neutral-100 pb-7 text-md">Create Interactive Workboards, Manage Projects, Collaborate, and Track Progress – All in One Platform. Stay Productive, Stay Organized!</p>
          <Link href="/dashboad" className={buttonVariants({ variant: "link" })}>Access for free</Link>
      </div>
    </div>
    </>
  )
}
export default page;