import { AlertDialogTriggerProps, Trigger } from '@radix-ui/react-alert-dialog';
import { Button } from '@still-ui/button';

type Props = {
  buttonType?: "success" | "danger" | "outline" | "ghost";
}

const AlertDialogTrigger = ({buttonType, className, children, ...props}: Props & AlertDialogTriggerProps) => {
  return (
    <Trigger asChild>
      <Button variant={buttonType} className={className} {...props}>{children}</Button>
    </Trigger>
  )
}

export default AlertDialogTrigger