'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition',
  {
    variants: {
      variant: {
        default: 'border-white/10 bg-white/10 text-slate-100',
        accent:
          'border-transparent bg-gradient-to-r from-teal-400 to-amber-300 text-slate-900 shadow-[0_12px_40px_rgba(45,212,191,0.3)]',
        outline: 'border-white/20 text-slate-100 hover:border-teal-300/60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const Badge = React.forwardRef(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        className={cn(badgeVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { badgeVariants };
