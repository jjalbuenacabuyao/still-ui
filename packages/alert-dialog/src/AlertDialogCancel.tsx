import { AlertDialogCancelProps, Cancel } from "@radix-ui/react-alert-dialog";
import { Button } from "@still-ui/button";

type CancelProps = {
  buttonType?: "success" | "danger" | "outline" | "ghost";
};

const AlertDialogCancel = ({
  buttonType,
  children,
  ...props
}: AlertDialogCancelProps & CancelProps) => {
  return (
    <Cancel asChild>
      <Button variant={buttonType} {...props}>
        {children}
      </Button>
    </Cancel>
  );
};

export default AlertDialogCancel;
