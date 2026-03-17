import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return <div className={cn("terminal-panel overflow-hidden", className)} {...props} />;
}

function CardHeader({ className, ...props }) {
  return <div className={cn("flex flex-col space-y-1.5 px-6 pt-6", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return <h3 className={cn("text-lg font-heading font-semibold text-text-primary tracking-wide", className)} {...props} />;
}

function CardDescription({ className, ...props }) {
  return <p className={cn("text-xs font-mono text-text-muted", className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return <div className={cn("flex items-center px-6 pb-6 pt-0", className)} {...props} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
