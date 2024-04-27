import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <>
    <div className="bg-gradient-to-tr from-neutral-900 to-neutral-800 h-full">
    <div className="absolute top-0  -mt-[93px] -mr-[176px] w-[200px] h-[300px] md:min-w-[400px] md:min-h-[400px] rounded-full bg-gradient-to-b from-sky-400 blur-3xl opacity-25 z-50 overflow-hidden"></div>
    <div className="flex justify-center items-center h-full">
    <SignIn path="/sign-in" />
    </div>
    </div>
    </>
  );
}