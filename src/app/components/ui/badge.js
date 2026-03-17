import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs font-mono transition-all cursor-default",
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-text-primary",
        accent: "border-neon-green/30 bg-neon-green/10 text-neon-green shadow-[0_0_10px_rgba(0,255,136,0.1)]",
        cyan: "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan",
        outline: "border-border bg-transparent text-text-muted hover:border-neon-green/30 hover:text-neon-green",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Badge({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span";
  return <Comp className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
