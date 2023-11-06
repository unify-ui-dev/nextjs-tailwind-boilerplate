import { cn } from "@/lib/util";
import { ReactNode } from "react";

export default function AppContainer({className, children}:{className?:string, children:ReactNode}) {
  return (
    <div className={
        cn("max-w-7xl mx-auto px-5 sm:px-10 lg:px-5", className || "")
    }>
        {children}
    </div>
  )
}
