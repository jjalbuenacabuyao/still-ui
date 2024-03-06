import { AlertDialogTitleProps, Title } from "@radix-ui/react-alert-dialog";
import { tv } from "tailwind-variants";

type TitleProps = {
  title: string | React.ReactNode;
};

const titleClass = tv({
  base: "text-lg font-semibold",
});

const AlertDialogTitle = ({
  className,
  title,
  ...props
}: AlertDialogTitleProps & TitleProps) => {
  return (
    <Title className={titleClass({ class: className })} {...props}>
      {title}
    </Title>
  );
};

export default AlertDialogTitle;
