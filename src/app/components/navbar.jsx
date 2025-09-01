import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
   return (
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
         <div className="container">
            <div className="relative -mx-4 flex items-center justify-between">
               <div className="px-4">
                  <Link href="/" className="navbar-logo block py-5">
                     <Image src="/logo.jpg" alt="logo" width={60} height={60} priority />
                  </Link>
               </div>

               <div className="flex w-full items-center justify-between px-4">
                  <nav
                     className={` absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-6`}
                  ></nav>

                  <div className="flex items-center justify-end pr-16 lg:pr-0">
                     <div className="hidden sm:flex">
                        <Link href="/signup" className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark">
                           Ayo Eksplor
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
