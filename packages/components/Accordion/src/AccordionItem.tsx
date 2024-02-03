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
    splitted: {
      true: "rounded border border-slate-200 p-2 shadow-md shadow-slate-100 last:border",
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
  const { splitted } = options;

  return (
    <Item
      className={item({ splitted, class: className })}
      value={value}
      {...props}
    >
      {children}
    </Item>
  );
};

export default AccordionItem;
