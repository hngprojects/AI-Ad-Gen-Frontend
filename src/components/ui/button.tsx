import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm  transition-[color,box-shadow] cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        purple:
          "bg-[#520052] text-white shadow-xs hover:bg-[#B800B8] focus-visible:ring-[#520052]/50",
      },
      size: {
        default: "h-9 px-4 py-2 rounded-sm has-[>svg]:px-3",
        sm: "h-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-sm px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-sm px-2",
        xs: "h-6 px-2 text-xs rounded-sm has-[>svg]:px-1.5",
      },
      width: {
        auto: "w-auto",
        full: "w-full",
        fixed: "w-48",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "auto",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  icon?: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
}

function Button({
  className,
  variant,
  size,
  width,
  asChild = false,
  href,
  icon,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : href ? "a" : "button";

  const buttonProps = !href ? props : {};
  const anchorProps = href
    ? { ...props, href, target: props.target || "_self" }
    : {};

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, width, className }))}
      {...(href ? anchorProps : buttonProps)}
    >
      <React.Fragment>
        {children}
        {icon && (
          <span className="inline-flex items-center transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </React.Fragment>
    </Comp>
  );
}

export { Button, buttonVariants };
