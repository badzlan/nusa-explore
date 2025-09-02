import Link from "next/link";
import Image from "next/image";

export default function Grid() {
   return (
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
         <div className="container">
            <div className="flex flex-wrap -mx-4">
               {/* Blog Card */}
               <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div className="mb-10 group">
                     <div className="mb-8 overflow-hidden rounded-[5px]">
                        <Link href="/cerita/malin-kundang">
                           <Image src="/logo.jpg" alt="Blog Image" width={400} height={250} className="w-full transition group-hover:rotate-6 group-hover:scale-125" />
                        </Link>
                     </div>
                     <div>
                        <span className="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">Dec 22, 2023</span>
                        <h3>
                           <Link href="/cerita/malin-kundang" className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                              Meet AutoManage, the best AI management tools
                           </Link>
                        </h3>
                        <p className="max-w-[370px] text-base text-body-color dark:text-dark-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Pagination */}
            <div className="mt-8 text-center">
               <div className="inline-flex rounded-[10px] border border-stroke bg-white p-3 dark:border-dark-3 dark:bg-dark-2">
                  <ul className="flex items-center -mx-1">
                     {/* Prev Button */}
                     <li className="px-1">
                        <button className="flex h-[34px] w-[34px] items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 dark:hover:border-primary dark:hover:text-white">
                           <svg width="8" height="15" viewBox="0 0 8 15" className="fill-current stroke-current">
                              <path
                                 d="M7.12979 1.91389L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34229 1.18358L0.830207 7.06752C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.829982 8.73889L6.34248 14.6014C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L7.12979 1.91389Z"
                                 strokeWidth="0.3"
                              />
                           </svg>
                        </button>
                     </li>

                     {/* Pages */}
                     {[1, 2].map((page) => (
                        <li key={page} className="px-1">
                           <button className="flex h-[34px] w-[34px] items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 dark:hover:border-primary dark:hover:text-white">
                              {page}
                           </button>
                        </li>
                     ))}

                     {/* Next Button */}
                     <li className="px-1">
                        <button className="flex h-[34px] w-[34px] items-center justify-center rounded-md border border-stroke bg-transparent text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 dark:hover:border-primary dark:hover:text-white">
                           <svg width="8" height="15" viewBox="0 0 8 15" className="fill-current stroke-current">
                              <path
                                 d="M0.870212 13.0861L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65771 13.8164L7.16979 7.93248C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17002 6.26111L1.65752 0.398611C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L0.870212 13.0861Z"
                                 strokeWidth="0.3"
                              />
                           </svg>
                        </button>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}
