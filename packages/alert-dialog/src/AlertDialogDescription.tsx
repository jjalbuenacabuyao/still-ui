import {
  Description,
} from "@radix-ui/react-alert-dialog";
import React, { ComponentPropsWithoutRef, ElementRef } from "react";
import { tv } from "tailwind-variants";

const description = tv({
  base: "text-justify leading-normal",
});

const AlertDialogDescription = React.forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    className={description({ class: className })}
    {...props}
    ref={ref}
  />
));

export default AlertDialogDescription;
