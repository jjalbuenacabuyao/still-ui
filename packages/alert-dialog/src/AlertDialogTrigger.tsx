import { Trigger } from "@radix-ui/react-alert-dialog";
import React from "react";
import { ComponentPropsWithoutRef, ElementRef } from "react";

const AlertDialogTrigger = React.forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ ...props }, ref) => <Trigger asChild {...props} ref={ref} />);

export default AlertDialogTrigger;
