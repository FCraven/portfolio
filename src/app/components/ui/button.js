'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-teal-400 to-amber-300 text-slate-900 shadow-[0_20px_60px_rgba(45,212,191,0.35)] hover:-translate-y-0.5',
        outline:
          'border border-white/10 bg-white/5 text-slate-100 hover:border-teal-300/60 hover:text-white hover:-translate-y-0.5',
        ghost:
          'text-slate-100 hover:bg-white/10',
      },
      size: {
        sm: 'px-3 py-2',
        md: 'px-5 py-3',
        lg: 'px-6 py-3 text-base',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const buttonStyles = buttonVariants;

export const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
