import { cn } from "../utils";

export const Button = ({ children, variant = "primary", className, ...props }) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-blue-600 border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
  };

  return (
    <button
      className={cn(
        "px-6 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 min-h-[44px]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
