import { AlertDialogPortalProps, Portal } from "@radix-ui/react-alert-dialog";

const AlertDialogPortal = ({ ...props }: AlertDialogPortalProps) => {
  return <Portal {...props} />;
};

export default AlertDialogPortal;
