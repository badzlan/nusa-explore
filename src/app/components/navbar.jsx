'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faHome } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"

export default function Navbar() {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const [fade, setFade] = useState(false);

    const toggleMenu = () => {
    setMenuVisibility((prev) => !prev);
    setFade(true);
    setTimeout(() => setFade(false), 200);

  };
    return (
        <nav className="fixed left-1/2 top-4 z-50 w-[96vw] md:w-[90vw] max-w-6xl -translate-x-1/2 rounded-2xl bg-white/90 backdrop-blur-lg shadow-xl border border-gray-200/50 flex items-center justify-between px-4 md:px-6 py-3 md:py-4 transition-all">
            <div>NusaExplore</div>
            <button onClick={toggleMenu}
      style={{
        display: "inline-block",
        transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
        opacity: fade ? 0 : 1,
        transform: menuVisibility ? "rotate(180deg)" : "rotate(0deg)",
        cursor: "pointer"
      }}>
            <div className="lg:hidden flex items-center gap-2">
                <FontAwesomeIcon
          icon={menuVisibility ? faXmark : faBars}
          size="xl"
        />
            </div>
            </button>
            <div className={`lg:hidden fixed left-1/2 top-20 z-40 -translate-x-1/2 min-w-[90vw] max-w-md rounded-xl shadow-lg
        transition-all duration-500 ease-out
        ${menuVisibility ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}>
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl flex flex-col gap-1 py-6 px-4 border border-gray-200 dark:border-gray-800"></div>
        </div>
        </nav>
    )
}