import { createContext } from "react";

type AccordionOptions = {
  variant?: "splitted";
  bordered?: boolean;
};

export const AccordionContext = createContext<AccordionOptions>({});
