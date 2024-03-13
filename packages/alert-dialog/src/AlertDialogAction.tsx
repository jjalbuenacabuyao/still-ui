import { Action } from "@radix-ui/react-alert-dialog";
import React, { ComponentPropsWithoutRef, ElementRef } from "react";

const AlertDialogAction = React.forwardRef<
  ElementRef<typeof Action>,
  ComponentPropsWithoutRef<typeof Action>
>(({ ...props }, ref) => <Action {...props} ref={ref} />);

export default AlertDialogAction;
