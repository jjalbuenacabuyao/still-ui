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
    ui: {
      brutal: "",
      glassmorphic: "",
      neomorphic: "",
    },
  },
  compoundVariants: [
    {
      splitted: true,
      ui: "brutal",
      class:
        "rounded-2xl border-0 bg-white shadow-none outline outline-2 outline-black drop-shadow-[4px_6px_#000] last:border-0",
    },
    {
      splitted: undefined,
      ui: "brutal",
      class:
        "border-black",
    },
  ],
});

const AccordionItem: FC<AccordionItemProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const options = useContext(AccordionContext);
  const { splitted, ui } = options;

  return (
    <Item
      className={item({ splitted, ui: ui, class: className })}
      value={value}
      {...props}
    >
      {children}
    </Item>
  );
};

export default AccordionItem;
