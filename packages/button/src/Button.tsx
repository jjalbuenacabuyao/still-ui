import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: ReactNode;
  isLoading?: boolean;
}

const button = tv({
  base: "px-6 py-4 font-bold flex items-center bg-sky-600 text-white rounded",
})

const Button: FC<ButtonProps> = ({
  className,
  disabled,
  icon,
  isLoading,
  title,
  ...props
}) => {
  return (
    <button className={button()} {...props}>
      {title}
      {icon}
    </button>
  );
};

export default Button;
