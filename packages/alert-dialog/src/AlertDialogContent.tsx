import { Content } from "@radix-ui/react-alert-dialog";
import React, { ComponentPropsWithoutRef, ElementRef } from "react";
import { tv } from "tailwind-variants";

const content = tv({
  base: "fixed left-1/2 top-1/2 max-w-lg translate-x-1/2 translate-y-1/2",
});

const AlertDialogContent = React.forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, ...props }, ref) => (
  <Content className={content({ class: className })} {...props} ref={ref} />
));

export default AlertDialogContent;
