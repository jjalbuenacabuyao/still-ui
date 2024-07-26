import { AlertDialogTitleProps, Title } from "@radix-ui/react-alert-dialog";
import React from "react";
import { ElementRef } from "react";
import { tv } from "tailwind-variants";

const titleClass = tv({
  base: "text-lg font-semibold",
});

const AlertDialogTitle = React.forwardRef<
  ElementRef<typeof Title>,
  AlertDialogTitleProps
>(({ className, children, ...props }, ref) => (
  <Title className={titleClass({ class: className })} {...props} ref={ref}>
    {children}
  </Title>
));

export default AlertDialogTitle;
