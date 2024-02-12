import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { tv } from "tailwind-variants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isLoading?: boolean;
}

const button = tv({
  base: "flex items-center rounded bg-sky-600 px-5 py-3 font-bold text-white",
});

const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  icon,
  isLoading,
  ...props
}) => {
  return (
    <button className={button()} {...props}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
