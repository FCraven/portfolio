import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded border font-mono text-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neon-green disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default: "border-neon-green/40 bg-neon-green/10 text-neon-green shadow-[0_0_15px_rgba(0,255,136,0.1)] hover:bg-neon-green/20 hover:shadow-[0_0_25px_rgba(0,255,136,0.2)]",
        outline: "border-border bg-transparent text-text-primary hover:border-neon-green/40 hover:text-neon-green",
        ghost: "border-transparent bg-transparent text-text-muted hover:text-neon-green hover:bg-neon-green/5",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
