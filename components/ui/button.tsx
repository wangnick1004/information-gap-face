import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-100 text-zinc-900 shadow hover:bg-zinc-200/90 font-semibold",
        secondary:
          "bg-zinc-800/90 text-zinc-100 shadow-sm hover:bg-zinc-800 border border-zinc-700/60",
        outline:
          "border border-zinc-800 bg-zinc-950/50 shadow-sm hover:bg-zinc-900 hover:text-zinc-100 hover:border-zinc-700 text-zinc-300",
        ghost:
          "hover:bg-zinc-800/60 hover:text-zinc-100 text-zinc-400",
        link:
          "text-[#06C755] underline-offset-4 hover:underline",
        line:
          "bg-[#06C755] text-white font-semibold shadow-[0_1px_15px_rgba(6,199,85,0.25)] hover:bg-[#05b34c] active:scale-[0.98]",
        glow:
          "bg-[#06C755] text-white font-semibold shadow-[0_0_25px_rgba(6,199,85,0.35)] hover:shadow-[0_0_35px_rgba(6,199,85,0.5)] hover:bg-[#05b34c] active:scale-[0.98]",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-6 text-sm font-semibold",
        xl: "h-12 rounded-xl px-7 text-base font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
