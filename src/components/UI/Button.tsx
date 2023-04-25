import { cn } from "@/lib/utils";
import { VariantProps, cva } from "cva";
import { HTMLAttributes, forwardRef } from "react";
import { Figma } from "react-feather";

const button = cva(
  ["font-semibold rounded-full py-2 px-4 flex ml-4 transition-all"],
  {
    variants: {
      intent: {
        primary: [
          "bg-[#1db36a]",
          "text-white",
          "border-transparent",
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
        link: ["bg-transparent", "text-gray-800", "hover:text-gray-500"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  hasIcon?: boolean;
  icon: string;
}

function getIcon(icon: string) {
  switch (icon) {
    case "figma":
      return <Figma />;
    default:
      null;
  }
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, className, intent, children, hasIcon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(button({ intent, className }))}
      >
        <span className="pr-2">{hasIcon ? getIcon(icon) : null}</span>

        {children}
      </button>
    );
  }
);

export default Button;
