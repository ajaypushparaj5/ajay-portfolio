import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, hoverEffect = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass rounded-2xl p-6 relative overflow-hidden transition-all duration-300",
                    hoverEffect && "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] hover:-translate-y-1",
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                {children}
            </div>
        );
    }
);
GlassCard.displayName = "GlassCard";
