import {
  AlertDialogDescriptionProps,
  Description,
} from "@radix-ui/react-alert-dialog";
import { tv } from "tailwind-variants";

type DescriptionProps = {
  description: string | React.ReactNode;
};

const descriptionClass = tv({
  base: "text-justify leading-normal",
});

const AlertDialogDescription = ({
  className,
  description,
  ...props
}: AlertDialogDescriptionProps & DescriptionProps) => {
  return (
    <Description className={descriptionClass({ class: className })} {...props}>
      {description}
    </Description>
  );
};

export default AlertDialogDescription;
