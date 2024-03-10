import { Action } from "@radix-ui/react-alert-dialog";
import { Button } from "@still-ui/button";
import React, { ComponentPropsWithoutRef, ElementRef } from "react";

const AlertDialogAction = React.forwardRef<
  ElementRef<typeof Action>,
  ComponentPropsWithoutRef<typeof Action>
>(({ children, ...props }, ref) => (
  <Action asChild ref={ref}>
    <Button {...props} />
  </Action>
));

export default AlertDialogAction;
