import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isDarkMode: boolean }
>(({ className, isDarkMode, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border",
      isDarkMode
        ? "bg-gray-900 border-gray-800 shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.05),inset_2px_2px_5px_rgba(0,0,0,0.5)]"
        : "bg-white border-gray-200 shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.05),inset_2px_2px_5px_rgba(255,255,255,0.5)]",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
