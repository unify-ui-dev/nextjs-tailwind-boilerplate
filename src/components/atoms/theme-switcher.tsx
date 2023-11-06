"use client"

import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <button aria-label="switch theme" className="flex p-3 rounded-lg ease-linear duration-300 text-neutral-700 dark:text-neutral-300 active:children:rotate-90 dark:active:children:-rotate-90 hover:bg-neutral-100 dark:hover:bg-neutral-800" onClick={()=>{ 
      if (theme === "light") {
          return setTheme("dark");
      }
      return setTheme("light")
   }}>
      <span className="transition-all duration-300 ease-linear flex aspect-square justify-center items-center text-neutral-900 dark:text-neutral-300">
        <svg className="w-5 h-5 hidden dark:flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
        <svg className="w-5 h-5 flex dark:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z" />
        </svg>
      </span>
    </button>
  )
}
