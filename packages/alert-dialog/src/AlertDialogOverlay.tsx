import { Overlay } from "@radix-ui/react-alert-dialog";
import React from "react";
import { ComponentPropsWithoutRef, ElementRef } from "react";
import { tv } from "tailwind-variants";

const overlay = tv({
  base: "fixed inset-0 bg-slate-500/50 transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
});

const AlertDialogOverlay = React.forwardRef<
  ElementRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    className={overlay({ class: className })}
    {...props}
    ref={ref}
  />
));

export default AlertDialogOverlay;
