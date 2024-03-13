import { AlertDialogTitleProps, Title } from "@radix-ui/react-alert-dialog";
import React from "react";
import { ElementRef } from "react";
import { tv } from "tailwind-variants";

type TitleProps = {
  title: string | React.ReactNode;
};

const titleClass = tv({
  base: "text-lg font-semibold",
});

const AlertDialogTitle = React.forwardRef<
  ElementRef<typeof Title>,
  AlertDialogTitleProps & TitleProps
>(({ className, title, ...props }, ref) => (
  <Title className={titleClass({ class: className })} {...props} ref={ref}>
    {title}
  </Title>
));

export default AlertDialogTitle;
