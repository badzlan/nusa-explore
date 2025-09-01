import Image from "next/image";

export default function Team() {
   return (
      <section id="team" className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]">
         <div className="container mx-auto">
            {/* Section Header */}
            <div className="-mx-4 flex flex-wrap">
               <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                     <span className="mb-2 block text-lg font-semibold text-primary">Our Team Members</span>
                     <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">Our Creative Team</h2>
                     <p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                  </div>
               </div>
            </div>

            {/* Team Members */}
            <div className="-mx-4 flex flex-wrap justify-center">
               <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/3">
                  <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                     {/* Avatar */}
                     <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                        <Image src="/assets/images/team/team-01.png" alt="team image" width={120} height={120} className="h-[120px] w-[120px] rounded-full object-cover" />
                     </div>

                     {/* Info */}
                     <div className="text-center">
                        <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">Melissa Tatcher</h4>
                        <p className="mb-5 text-sm text-body-color dark:text-dark-6">Marketing Expert</p>
                     </div>
                  </div>
               </div>
               <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/3">
                  <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                     {/* Avatar */}
                     <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                        <Image src="/assets/images/team/team-01.png" alt="team image" width={120} height={120} className="h-[120px] w-[120px] rounded-full object-cover" />
                     </div>

                     {/* Info */}
                     <div className="text-center">
                        <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">Melissa Tatcher</h4>
                        <p className="mb-5 text-sm text-body-color dark:text-dark-6">Marketing Expert</p>
                     </div>
                  </div>
               </div>
               <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/3">
                  <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                     {/* Avatar */}
                     <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                        <Image src="/assets/images/team/team-01.png" alt="team image" width={120} height={120} className="h-[120px] w-[120px] rounded-full object-cover" />
                     </div>

                     {/* Info */}
                     <div className="text-center">
                        <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">Melissa Tatcher</h4>
                        <p className="mb-5 text-sm text-body-color dark:text-dark-6">Marketing Expert</p>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </section>
   );
}
