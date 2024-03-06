import { AlertDialogContentProps, Content } from "@radix-ui/react-alert-dialog"
import { tv } from "tailwind-variants"

const content = tv({
  base: "fixed top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 max-w-lg"
})

const AlertDialogContent = ({children, className, ...props}: AlertDialogContentProps) => {
  return (
    <Content className={content({class: className})} {...props}>
      {children}
    </Content>
  )
}

export default AlertDialogContent