import { Cancel } from "@radix-ui/react-alert-dialog";
import { Button } from "@still-ui/button";
import React, { ComponentPropsWithoutRef, ElementRef } from "react";


const AlertDialogCancel = React.forwardRef<
  ElementRef<typeof Cancel>,
  ComponentPropsWithoutRef<typeof Cancel>
>(({ ...props }, ref) => (
  <Cancel asChild ref={ref}>
    <Button {...props} />
  </Cancel>
));

export default AlertDialogCancel;
