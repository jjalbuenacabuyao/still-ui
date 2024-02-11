import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: ReactNode;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  disabled,
  icon,
  isLoading,
  title,
  ...props
}) => {
  return (
    <button className="" {...props}>
      {title}
      {icon}
    </button>
  );
};

export default Button;
