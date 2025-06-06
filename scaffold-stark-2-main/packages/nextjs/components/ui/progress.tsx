// components/ui/progress.tsx

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative h-2 w-full overflow-hidden rounded-full bg-secondary", className)}
        {...props}
      >
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    )
  }
)

Progress.displayName = "Progress"

export { Progress }
