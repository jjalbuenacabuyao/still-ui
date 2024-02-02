import {
  AccordionItem as Item,
  AccordionItemProps,
} from "@radix-ui/react-accordion";
import { useContext, FC } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import { tv } from "tailwind-variants";

const item = tv({
  base: "border-b border-b-slate-200 last:border-0",
  variants: {
    variant: {
      splitted:
        "rounded border border-slate-200 p-2 shadow-md shadow-slate-100 last:border",
    },
  },
});

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const options = useContext(AccordionContext);
  const { variant, } = options;

  return (
    <Item
      className={item({ variant: variant, class: className })}
      value={value}
      {...props}
    >
      {children}
    </Item>
  );
};

export default AccordionItem;
