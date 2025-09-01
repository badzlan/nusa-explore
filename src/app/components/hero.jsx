import Link from "next/link";

export default function Hero() {
   return (
      <section id="home" className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]">
         <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
               <div className="w-full px-4">
                  <div className="hero-content mx-auto max-w-[780px] text-center">
                     {/* Heading */}
                     <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">Selamat Datang di Cerita<span style={{ color: "#f1c28b" }}>Budaya</span></h1>

                     {/* Sub heading */}
                     <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                     Cerita<span style={{ color: "#f1c28b" }}>Budaya</span> merupakan website pembelajaran tentang cerita rakyat dari berbagai daerah di Indonesia dan dilengkap dengan quiz.
                     </p>

                     {/* CTA Buttons */}
                     <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                        <li>
                           <Link
                              href="https://links.tailgrids.com/play-download"
                              className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                           >
                              Download Now
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="https://github.com/tailgrids/play-tailwind"
                              target="_blank"
                              className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                           >
                              {/* Github icon */}
                              <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M12 0.675C5.625 0.675 0.375 5.85 0.375 12.3c0 5.1 3.338 9.45 7.987 11.025.6.112.788-.263.788-.525 0-.262 0-1.012-.038-2.025-3.225.75-3.9-1.575-3.9-1.575-.525-1.313-1.313-1.688-1.313-1.688-1.05-.75.037-.75.037-.75 1.163.038 1.8 1.2 1.8 1.2 1.013 1.8 2.738 1.275 3.375.937.113-.75.413-1.275.75-1.575-2.55-.262-5.287-1.275-5.287-5.7 0-1.275.487-2.288 1.2-3.076-.113-.262-.525-1.462.112-3.075 0 0 1.013-.3 3.225 1.2a8.43 8.43 0 0 1 2.925-.412c1.013 0 2.025.112 2.925.412 2.212-1.462 3.225-1.2 3.225-1.2.637 1.613.225 2.813.112 3.075.713.788 1.2 1.8 1.2 3.076 0 4.425-2.737 5.438-5.287 5.7.45.375.825 1.05.825 2.1 0 1.575-.037 2.813-.037 3.188 0 .262.188.637.788.525 4.65-1.575 7.987-5.925 7.987-11.025C23.625 5.85 18.375 0.675 12 0.675Z" />
                              </svg>
                              Star on Github
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="w-full px-4">
                  <div className="wow fadeInUp relative z-10 mx-auto max-w-[845px]" data-wow-delay=".25s">
                     <div className="mt-16">
                        <img src="https://play-tailwind.tailgrids.com/assets/images/hero/hero-image.jpg" alt="hero" className="mx-auto max-w-full rounded-t-xl rounded-tr-xl" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
