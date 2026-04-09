import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export const Badge = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold font-mono text-primary transition-colors hover:bg-primary/20 hover:border-primary/50",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Badge.displayName = "Badge";
