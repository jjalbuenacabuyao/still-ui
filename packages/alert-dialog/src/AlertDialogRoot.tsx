import { AlertDialogProps, Root } from '@radix-ui/react-alert-dialog'

const AlertDialogRoot = ({children, ...props}: AlertDialogProps) => {
  return (
    <Root {...props}>
      {children}
    </Root>
  )
}

export default AlertDialogRoot