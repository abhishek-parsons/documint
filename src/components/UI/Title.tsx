import { cn } from "@/lib/utils";
import { VariantProps, cva } from "cva";
import { HTMLAttributes, forwardRef } from "react";

const heading = cva(["text-slate-900 font-semibold"], {
  variants: {
    size: {
      big: "text-5xl",
      small: "text-3xl",
    },
  },
  defaultVariants: {
    size: "big",
  },
});

interface TitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ size, className, children, ...props }) => {
    return (
      <h1 {...props} className={cn(heading({ size, className }))}>
        {children}
      </h1>
    );
  }
);

Title.displayName = "Title";

export default Title;
