import { AlertDialogPortalProps, Portal } from "@radix-ui/react-alert-dialog"

const AlertDialogPortal = ({children, ...props}: AlertDialogPortalProps) => {
  return (
    <Portal {...props}>{children}</Portal>
  )
}

export default AlertDialogPortal