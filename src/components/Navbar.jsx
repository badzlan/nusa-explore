import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
   return (
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-primary">
         <div className="container">
            <div className="relative -mx-4 flex items-center justify-between">
               <div className="px-4">
                  <Link href="/" className="navbar-logo block py-5">
                     <Image src="/logo-white.png" alt="logo" width={180} height={60} priority />
                  </Link>
               </div>

               <div className="px-4">
                  <Link href="/cerita" className="rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark">
                     Ayo Eksplor →
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
