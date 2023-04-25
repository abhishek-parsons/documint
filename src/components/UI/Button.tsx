import { cn } from "@/lib/utils";
import { VariantProps, cva } from "cva";
import { HTMLAttributes, forwardRef } from "react";

const button = cva(["font-semibold border rounded-full py-2 px-4"], {
  variants: {
    intent: {
      primary: [
        "bg-[#1db36a]",
        "text-white",
        "border-transparent",
        "transition-all",
        "hover:bg-[#178d54]",
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(button({ intent, className }))}
      >
        {children}
      </button>
    );
  }
);

export default Button;
