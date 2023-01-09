# Aurora Design System

## Bringing beautiful UI components ready for production

Aurora is a comprehensive React component library to help build nwPlus websites faster. Common components such as icons, typography, buttons, controls, inputs, and dropdowns have been built with reusability and atomic design in mind so that developers can use them right out of the box. It is built with React Styled Components and Storybook.

### Getting Started

Aurora is available as an npm package.

**npm:**

```
npm i @nwplusdev/aurora
```

Here is an example of a basic app using Aurora's Button component:

```js
import * as React from "react";
import { Button } from "@nwplusdev/aurora";

function App() {
  return <Button active variant="primary" size="small" label="Hello World" />;
}
```

### About

Preview of some of our components

<img width="568" alt="Screen Shot 2022-09-29 at 12 06 21 AM" src="https://user-images.githubusercontent.com/70789275/192963217-168c1da5-a29c-4723-92e0-be839cbe870c.png">

Inluded components:

- Buttons
- ImageCards
- Controls
  - Number
  - Radial
  - Toggle
- Dropdowns
  - Simple Dropdown
  - Dropdown Select
  - Dropdown Search
- Calendar
- Header
- Indicators
  - Progressbar
  - Timer
- Input
  - Checkbox
  - Textarea (Long Inputs)
  - Mobile Input
  - Short Inputs
- Signup Modal
- Side panel
- Typography
- Icons
