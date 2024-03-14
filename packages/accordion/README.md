# StillUI Accordion

Accordion component is a UI element that allows users to expand and collapse sections of content. It can be useful for organizing large amounts of information in a limited space. An accordion component typically consists of a header that displays a title or a summary of the content, and a body that contains the full content.

## Installation

```sh
npm i @still-ui/accordion
```

## Anatomy

```tsx
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@still-ui/accordion";

const Accordion = () => {
  return (
    <AccordionRoot>
      <AccordionItem>
        <AccordionTrigger />
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};
```

## Example

```tsx
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@still-ui/accordion";

const Accordion = () => {
  return (
    <AccordionRoot type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit?"}
        />
        <AccordionContent>
          Nulla ornare, nulla at commodo condimentum, nibh elit cursus enim, a
          imperdiet dolor urna ut felis.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger title={"Pellentesque vel sapien nisl?"} />
        <AccordionContent>
          Fusce finibus justo ut dui auctor fermentum. Nulla facilisi. Curabitur
          quis enim vel felis accumsan faucibus.
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};

export default Accordion;
```

## Customization

### 1. Allowing closing content when clicking trigger for an open item (Recommended)
By default, <b>collapsible</b> prop is set to false so when an item is opened, it cannot be close. To override this behavior, set the <b>collapsible</b> prop to <b>true</b>.

```tsx
const Accordion = () => {
  return (
    <AccordionRoot type="single" collapsible>
      {/*Contents*/}
    </AccordionRoot>
  );
};

export default Accordion;
```


### 2. Opening multiple items at the same time
It is possible to open multiple accordion item at the same time by modifying the <b>type</b> prop of the AccordionRoot.

```tsx
const Accordion = () => {
  return (
    <AccordionRoot type="multiple" collapsible>
      {/*Contents*/}
    </AccordionRoot>
  );
};

export default Accordion;
```


### 3. Split Accordion items
To seperate each item in the accordion, set the <b>splitted</b> prop to <b>true</b>.

```tsx
const Accordion = () => {
  return (
    <AccordionRoot type="multiple" splitted collapsible>
      {/*Contents*/}
    </AccordionRoot>
  );
};

export default Accordion;
```


### 4. Adding border
To add border arround the accordion, set <b>bordered</b> prop to <b>true</b>.

```tsx
const Accordion = () => {
  return (
    <AccordionRoot type="multiple" bordered collapsible>
      {/*Contents*/}
    </AccordionRoot>
  );
};

export default Accordion;
```


### 5. Using custom styles
Still-UI is built on top of TailwindCSS so anyone can freely modify the styles to match on your brand. This is done by using the <b>className</b> prop.

```tsx
const Accordion = () => {
  return (
    <AccordionRoot type="multiple" ui="brutal" className="gap-4" collapsible>
      {/*Contents*/}
    </AccordionRoot>
  );
};

export default Accordion;
```