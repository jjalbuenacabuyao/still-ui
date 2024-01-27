import { createContext } from "react";

type AccordionOptions = {
  variant?: "default";
  bordered?: boolean;
}

export const AccordionContext = createContext<AccordionOptions>({
  variant: "default",
  bordered: false
});
