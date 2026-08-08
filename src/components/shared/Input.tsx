import type { InputHTMLAttributes } from "react"

import { Divider } from "./Divider"
import { twMerge } from "tailwind-merge"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
  suffix?: string
  className?: string
}

export function Input({ className, prefix, suffix, ...rest }: InputProps) {
  return (
    <div
      className={twMerge(
        "bg-input flex items-center rounded-2xl p-4 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]",
        className,
      )}
    >
      {prefix && (
        <>
          <span className="text-muted-foreground text-sm font-medium">
            {prefix}
          </span>
          <Divider orientation="vertical" />
        </>
      )}
      <input
        className="text-foreground placeholder:text-muted-foreground w-full bg-transparent text-sm outline-none"
        autoFocus
        {...rest}
      />
      {suffix && (
        <>
          <Divider orientation="vertical" />
          <span className="text-muted-foreground text-sm font-medium">
            {suffix}
          </span>
        </>
      )}
    </div>
  )
}
