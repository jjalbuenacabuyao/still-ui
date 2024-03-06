import { Action, AlertDialogActionProps } from "@radix-ui/react-alert-dialog";
import { Button } from "@still-ui/button";

type ActionProps = {
  buttonType?: "success" | "danger" | "outline" | "ghost";
};

const AlertDialogAction = ({
  children,
  buttonType,
  ...props
}: AlertDialogActionProps & ActionProps) => {
  return (
    <Action asChild>
      <Button variant={buttonType} {...props}>
        {children}
      </Button>
    </Action>
  );
};

export default AlertDialogAction;
