import React, { ComponentPropsWithoutRef, ElementRef } from 'react'
import { Header } from "@radix-ui/react-accordion"

const AccordionHeader = React.forwardRef<
  ElementRef<typeof Header>,
  ComponentPropsWithoutRef<typeof Header>
>(({ children, ...props }, ref) => {
  return (
    <Header {...props} ref={ref}>
      {children}
    </Header>
  );
});

export default AccordionHeader