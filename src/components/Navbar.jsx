import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function navbar() {
   return (
      <nav className="fixed left-1/2 top-4 z-50 w-[96vw] md:w-[90vw] max-w-6xl -translate-x-1/2 rounded-2xl bg-white/90 backdrop-blur-lg shadow-xl border border-gray-200/50 dark:bg-neutral-900/90 dark:border-neutral-800/50 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 transition-all">
         <div className="flex items-center gap-2 md:gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-green-600 text-xl hover:text-green-700 transition-colors">
               <Image src="/logo.png" alt="Orza Logo" width={28} height={28} className="object-contain" />
               Orza
            </Link>
         </div>

         <button aria-label="Menu" className="p-2 rounded-xl text-green-600 hover:bg-green-50 focus:outline-none transition-colors"></button>
      </nav>
   );
}
