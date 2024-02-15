import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isLoading?: boolean;
  rounded?: boolean;
  variant?: "success" | "danger" | "outline" | "ghost";
}

const button = tv({
  base: "rounded bg-sky-600 px-5 py-3 font-bold text-white",
  variants: {
    variant: {
      success: "bg-green-500",
      danger: "bg-red-500",
      outline: "border border-sky-500 bg-transparent text-sky-500",
      ghost: "bg-sky-200 text-sky-800",
    },
    rounded: {
      true: "rounded-full",
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
  variant,
  ...props
}) => {
  return (
    <button className={button({ variant, rounded })} {...props}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
