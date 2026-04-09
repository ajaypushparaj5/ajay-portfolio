import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const NeonButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative group overflow-hidden rounded-full bg-transparent px-8 py-3 text-sm font-semibold text-white border border-primary/50 transition-all hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,255,136,0.5)]",
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
                <div className="absolute inset-0 z-0 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
        );
    }
);
NeonButton.displayName = "NeonButton";
