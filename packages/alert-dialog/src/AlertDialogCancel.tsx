import { Cancel } from "@radix-ui/react-alert-dialog";
import React, { ComponentPropsWithoutRef, ElementRef } from "react";

const AlertDialogCancel = React.forwardRef<
  ElementRef<typeof Cancel>,
  ComponentPropsWithoutRef<typeof Cancel>
>(({ ...props }, ref) => <Cancel {...props} ref={ref} />);

export default AlertDialogCancel;
