import Link from "next/link";

export default function Banner() {
   return (
      <div className="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[160px] dark:bg-dark">
         {/* Garis dekorasi bawah */}
         <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-stroke/0 via-stroke dark:via-dark-3 to-stroke/0"></div>

         <div className="container">
            <div className="flex flex-wrap items-center -mx-4">
               <div className="w-full px-4">
                  <div className="text-center">
                     {/* Judul */}
                     <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">Grid</h1>

                     {/* Deskripsi */}
                     <p className="mb-5 text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available.</p>

                     {/* Breadcrumb */}
                     <ul className="flex items-center justify-center gap-[10px]">
                        <li>
                           <Link href="/" className="flex items-center gap-[10px] text-base font-medium text-dark dark:text-white">
                              Home
                           </Link>
                        </li>
                        <li>
                           <span className="flex items-center gap-[10px] text-base font-medium text-body-color">
                              <span className="text-body-color dark:text-dark-6">/</span>
                              Cerita
                           </span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
