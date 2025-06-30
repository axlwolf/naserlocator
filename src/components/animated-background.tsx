import { cn } from "@/lib/utils";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-background"></div>
      <div 
        className={cn(
          "absolute -top-20 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl",
          "animate-[spin_25s_linear_infinite]"
        )}
        style={{ animationDirection: "alternate" }}
      />
      <div 
        className={cn(
          "absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl",
           "animate-[spin_30s_linear_infinite]"
        )}
         style={{ animationDirection: "alternate-reverse" }}
      />
    </div>
  );
};

export default AnimatedBackground;
