import {
  AccordionTriggerProps as RadixAccordionTriggerProps,
  AccordionTrigger as Trigger,
  AccordionHeader,
} from "@radix-ui/react-accordion";
import { useContext, FC, ReactNode } from "react";
import { AccordionContext } from "./hooks/AccordionContext";
import "remixicon/fonts/remixicon.css";
import { tv } from "tailwind-variants";

type AccordionTriggerProps = {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  icon?: ReactNode;
}

const trigger = tv({
  slots: {
    wrapper:
      "group flex w-full items-center justify-between gap-4 p-4 text-left ",
    innerWrapper: "flex flex-col gap-1",
    tvTitle: "text-base",
    tvSubtitle: "text-xs",
    tvIcon:
      "ri-arrow-down-s-line transition-transform group-data-[state=open]:rotate-180",
  },
});

const { wrapper, innerWrapper, tvTitle, tvSubtitle, tvIcon } = trigger();

const AccordionTrigger: FC<
  RadixAccordionTriggerProps & AccordionTriggerProps
> = ({ className, title, subtitle, icon, ...props }) => {
  const options = useContext(AccordionContext);

  return (
    <AccordionHeader>
      <Trigger className={wrapper({ class: className })} {...props}>
        <div className={innerWrapper()}>
          <span className={tvTitle()}>{title}</span>
          <span className={tvSubtitle()}>{subtitle}</span>
        </div>
        {icon ? icon : <i className={tvIcon()}></i>}
      </Trigger>
    </AccordionHeader>
  );
};

export default AccordionTrigger;
