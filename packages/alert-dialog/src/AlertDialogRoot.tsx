import { AlertDialogProps, Root } from "@radix-ui/react-alert-dialog";

const AlertDialogRoot = ({ ...props }: AlertDialogProps) => {
  return <Root {...props} />;
};

export default AlertDialogRoot;
