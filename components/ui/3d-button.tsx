"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { IconLoader2, type TablerIcon } from "@tabler/icons-react"

import { motion, type MotionProps } from "framer-motion"

const TABLER_ICON_STYLE = 14
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 border",
  {
    variants: {
      variant: {
        ai: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary-foreground/20 border-b-4 border-b-primary/80 shadow-lg",
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 border-primary-foreground/20 border-b-4 border-b-primary/80 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive-foreground/20 border-b-4 border-b-destructive/80 shadow-lg",
        outline: "border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        outline_destructive: "border text-destructive bg-background hover:bg-destructive/10 border-destructive/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        ghost_destructive: "bg-transparent text-destructive hover:bg-destructive/10",
        link: "text-primary underline-offset-4 hover:underline",
        solid: "bg-zinc-800 text-white hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-xl px-8",
        xs: "h-8 rounded-md px-4 text-sm",
        icon: "h-10 w-10 border-b border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

type MotionButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  MotionProps

export interface ButtonProps extends MotionButtonPropsType {
  asChild?: boolean
  supportIcon?: TablerIcon
  leadingIcon?: TablerIcon
  isLoading?: boolean
  stretch?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      stretch = false,
      supportIcon = undefined,
      leadingIcon = undefined,
      isLoading = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const SupportIconRender = supportIcon ?? React.Fragment
    const LeadingIconRender = leadingIcon ?? React.Fragment
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }), stretch && "w-full")}
        ref={ref}
        {...props}
      >
        {isLoading ? <IconLoader2 {...TABLER_ICON_STYLE} className="animate-spin" /> : <></>}
        {!isLoading && supportIcon && <SupportIconRender {...TABLER_ICON_STYLE} />}
        {children}
        {leadingIcon && <LeadingIconRender {...TABLER_ICON_STYLE} />}
      </motion.button>
    )
  },
)
Button.displayName = "Button"

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "button-group flex flex-row overflow-hidden rounded-lg border w-fit divide-x",
        "*:rounded-none *:border-none",
        className,
      )}
      {...props}
    />
  )
})

ButtonGroup.displayName = "ButtonGroup"

export { Button, buttonVariants }
