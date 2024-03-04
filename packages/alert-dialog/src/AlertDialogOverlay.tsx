import { AlertDialogOverlayProps, Overlay } from "@radix-ui/react-alert-dialog";
import { tv } from "tailwind-variants";

const overlay = tv({
  base: "fixed inset-0 bg-slate-500/50 transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
});

const AlertDialogOverlay = ({
  children,
  className,
  ...props
}: AlertDialogOverlayProps) => {
  return (
    <Overlay className={overlay({ class: className })} {...props}>
      {children}
    </Overlay>
  );
};

export default AlertDialogOverlay;
