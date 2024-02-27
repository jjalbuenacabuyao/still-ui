import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isLoading?: boolean;
  rounded?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "success" | "danger" | "outline" | "ghost";
}

const button = tv({
  base: "flex items-center gap-3 rounded bg-sky-600 px-5 py-3 font-bold text-white hover:shadow-lg",
  variants: {
    variant: {
      success: "bg-green-500 hover:shadow-lg",
      danger: "bg-red-500 hover:shadow-lg",
      outline:
        "border border-sky-500 bg-transparent text-sky-500 hover:shadow-lg",
      ghost: "bg-sky-100 text-sky-800 hover:shadow-lg",
    },
    rounded: {
      true: "rounded-full",
    },
    size: {
      sm: "px-4 py-2 text-sm font-medium",
      md: "",
      lg: "px-6 py-4 text-lg",
      xl: "px-7 py-5 text-xl",
    },
    isLoading: {
      true: "opacity-80 cursor-not-allowed"
    }
  },
});

const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  icon,
  isLoading,
  rounded,
  size = "md",
  variant,
  ...props
}) => {
  return (
    <button className={button({ variant, rounded, size, isLoading })} {...props}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
