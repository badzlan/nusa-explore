import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]" data-wow-delay=".15s">
         <div className="container">
            <div className="-mx-4 flex flex-wrap">
               {/* Logo + Social */}
               <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
                  <div className="mb-10 w-full">
                     <Link href="/" className="mb-6 inline-block max-w-[160px]">
                        <Image src="/assets/images/logo/logo-white.svg" alt="CeritaBudaya Logo" width={160} height={50} className="max-w-full" />
                     </Link>
                     <p className="mb-8 max-w-[270px] text-base text-gray-7">We create digital experiences for brands and companies by using technology.</p>
                     {/* Social icons */}
                     <div className="-mx-3 flex items-center">
                        <Link href="#" className="px-3 text-gray-7 hover:text-white">
                           {/* Facebook Icon */}
                           <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                              <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
                           </svg>
                        </Link>
                        {/* Tambah ikon lain (Twitter, Instagram, LinkedIn) sama seperti di HTML */}
                     </div>
                  </div>
               </div>

               {/* Menu About */}
               <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                  <div className="mb-10 w-full">
                     <h4 className="mb-9 text-lg font-semibold text-white">About Us</h4>
                     <ul>
                        {["Home", "Features", "About", "Testimonial"].map((item, i) => (
                           <li key={i}>
                              <Link href="#" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                 {item}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Menu Features */}
               <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
                  <div className="mb-10 w-full">
                     <h4 className="mb-9 text-lg font-semibold text-white">Features</h4>
                     <ul>
                        {["How it works", "Privacy policy", "Terms of Service", "Refund policy"].map((item, i) => (
                           <li key={i}>
                              <Link href="#" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                 {item}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Menu Products */}
               <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
                  <div className="mb-10 w-full">
                     <h4 className="mb-9 text-lg font-semibold text-white">Our Products</h4>
                     <ul>
                        {["LineIcons", "Ecommerce HTML", "TailAdmin", "PlainAdmin"].map((item, i) => (
                           <li key={i}>
                              <Link href="#" className="mb-3 inline-block text-base text-gray-7 hover:text-primary">
                                 {item}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Latest Blog */}
               <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
                  <div className="mb-10 w-full">
                     <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
                     <div className="flex flex-col gap-8">
                        <Link href="/blog-details" className="group flex items-center gap-[22px]">
                           <div className="overflow-hidden rounded">
                              <Image src="/assets/images/blog/blog-footer-01.jpg" alt="Blog 1" width={80} height={80} className="object-cover" />
                           </div>
                           <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">I think really important to design with...</span>
                        </Link>

                        <Link href="/blog-details" className="group flex items-center gap-[22px]">
                           <div className="overflow-hidden rounded">
                              <Image src="/assets/images/blog/blog-footer-02.jpg" alt="Blog 2" width={80} height={80} className="object-cover" />
                           </div>
                           <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">Recognizing the need is the primary...</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Bar */}
         <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
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

         {/* Shapes */}
         <span className="absolute left-0 top-0 z-[-1]">
            <Image src="/assets/images/footer/shape-1.svg" alt="Shape 1" width={100} height={100} />
         </span>

         <span className="absolute bottom-0 right-0 z-[-1]">
            <Image src="/assets/images/footer/shape-3.svg" alt="Shape 3" width={100} height={100} />
         </span>

         {/* SVG background dots */}
         <span className="absolute right-0 top-0 z-[-1]">
            <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M1.8667 33.1956C2.89765 33.1956 3.7334 34.0318 3.7334 35.0633C3.7334 36.0947 2.89765 36.9309 1.8667 36.9309C0.835744 36.9309 0 36.0947 0 35.0633C0 34.0318 0.835744 33.1956 1.8667 33.1956Z"
                  fill="white"
                  fillOpacity="0.08"
               />
               {/* Tambahkan path lain sesuai SVG asli */}
            </svg>
         </span>
      </footer>
   );
}
