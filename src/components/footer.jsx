import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="relative z-10 bg-primary">
         {/* Bottom Bar */}
         <div className="border-t border-[#8890A4] border-opacity-40 py-8">
            <div className="container">
               <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                     <div className="my-1">
                        <div className="-mx-3 flex items-center justify-center md:justify-start">
                           {["Privacy policy", "Legal notice", "Terms of service"].map((item, i) => (
                              <Link href="#" key={i} className="px-3 text-base text-gray-7 hover:text-white hover:underline">
                                 {item}
                              </Link>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                     <div className="my-1 flex justify-center md:justify-end">
                        <p className="text-base text-gray-7">
                           Designed and Developed by{" "}
                           <Link href="https://tailgrids.com" target="_blank" rel="nofollow noopener" className="text-gray-1 hover:underline">
                              TailGrids and UIdeck
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
