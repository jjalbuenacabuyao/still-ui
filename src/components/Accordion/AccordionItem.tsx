import { AccordionItem as Item, AccordionItemProps } from "@radix-ui/react-accordion";
import { useContext, FC, forwardRef, ForwardedRef } from "react";
import { AccordionContext } from "./AccordionContext";
import { cn } from "../../lib/utils";

const AccordionItem: FC<AccordionItemProps> = forwardRef(
  (
    { children, className, value, ...props },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const options = useContext(AccordionContext);

    return (
      <Item
        className={cn("border-b border-b-slate-300 last:border-0", className)}
        value={value}
        {...props}
        ref={ref}
      >
        {children}
      </Item>
    );
  },
);

export default AccordionItem;
