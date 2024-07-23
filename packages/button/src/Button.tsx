import { ButtonHTMLAttributes, FC } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  rounded?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "success" | "danger" | "outline" | "ghost";
  elevated?: boolean;
  iconOnly?: boolean;
}

const button = tv({
  base: "flex items-center gap-2 rounded bg-sky-500 px-6 py-2 font-bold tracking-wider text-white hover:shadow-lg hover:bg-sky-700 transition-all active:scale-90",
  variants: {
    variant: {
      success: "bg-green-500 hover:shadow-lg hover:bg-green-700",
      danger: "bg-red-500 hover:shadow-lg hover:bg-red-700",
      outline:
        "border border-sky-500 bg-transparent text-sky-500 hover:shadow-lg hover:bg-sky-500 hover:text-white",
      ghost: "bg-sky-100 text-sky-800 hover:shadow-lg hover:bg-sky-200",
    },
    rounded: {
      true: "rounded-full",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "",
      lg: "px-6 py-3 text-lg",
      xl: "px-7 py-4 text-xl",
    },
    isLoading: {
      true: "opacity-80 cursor-not-allowed"
    },
    elevated: {
      true: "shadow-md"
    },
    iconOnly: {
      true: "rounded-full p-3"
    }
  },
});

const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  isLoading,
  rounded,
  elevated,
  size = "md",
  variant,
  iconOnly,
  ...props
}) => {
  return (
    <button className={button({ variant, rounded, size, isLoading, elevated, iconOnly, class: className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
