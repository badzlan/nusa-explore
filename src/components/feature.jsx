export default function Features() {
   return (
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
         <div className="container">
            {/* Header Section */}
            <div className="-mx-4 flex flex-wrap">
               <div className="w-full px-4">
                  <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                     <span className="mb-2 block text-lg font-semibold text-primary">Features</span>
                     <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">Main Features Of Play</h2>
                     <p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                  </div>
               </div>
            </div>

            {/* Features Grid */}
            <div className="-mx-4 flex flex-wrap">
               {/* Feature Item */}
               <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="group mb-12">
                     <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                        <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                        {/* SVG Icon */}
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.5801 8.30514H27.9926C28.6113 7.85514 29.1176 7.34889 ..." fill="white" />
                        </svg>
                     </div>
                     <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Free and Open-Source</h4>
                     <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">Lorem Ipsum is simply dummy text of the printing and industry.</p>
                     <a href="#" className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                        Learn More
                     </a>
                  </div>
               </div>
               <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="group mb-12">
                     <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                        <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                        {/* SVG Icon */}
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.5801 8.30514H27.9926C28.6113 7.85514 29.1176 7.34889 ..." fill="white" />
                        </svg>
                     </div>
                     <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Free and Open-Source</h4>
                     <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">Lorem Ipsum is simply dummy text of the printing and industry.</p>
                     <a href="#" className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                        Learn More
                     </a>
                  </div>
               </div>
               <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="group mb-12">
                     <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                        <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                        {/* SVG Icon */}
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.5801 8.30514H27.9926C28.6113 7.85514 29.1176 7.34889 ..." fill="white" />
                        </svg>
                     </div>
                     <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Free and Open-Source</h4>
                     <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">Lorem Ipsum is simply dummy text of the printing and industry.</p>
                     <a href="#" className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                        Learn More
                     </a>
                  </div>
               </div>
               <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="group mb-12">
                     <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                        <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                        {/* SVG Icon */}
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.5801 8.30514H27.9926C28.6113 7.85514 29.1176 7.34889 ..." fill="white" />
                        </svg>
                     </div>
                     <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">Free and Open-Source</h4>
                     <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">Lorem Ipsum is simply dummy text of the printing and industry.</p>
                     <a href="#" className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                        Learn More
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
