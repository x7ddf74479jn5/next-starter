---
name: "mcl"
root: "."
output: "**/*"
ignore: []
questions:
  model: "Which model?"
  component: "Please enter component name"
---

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/index.ts`

```ts
export { {{ inputs.component | pascal }} } from "./{{ inputs.component | pascal }}"
```

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.tsx`

```tsx
import type { {{ inputs.model | pascal }}ListProps } from "@/types/{{ inputs.model | pascal }}"

export const {{ inputs.component | pascal }}: React.FC<{{ inputs.model | pascal }}ListProps> = ({ {{ inputs.model | camel }}s }) => {
  return <></>
}
```

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.stories.tsx`

```tsx
import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { {{ inputs.component | pascal }} } from "@/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}"
import { mock{{ inputs.model | pascal }}List } from "@/mocks/{{ inputs.model | pascal }}"

export default {
  title: "Model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}",
  component: {{ inputs.component | pascal }},
} as ComponentMeta<typeof {{ inputs.component | pascal }}>

export const Default: ComponentStoryObj<typeof {{ inputs.component | pascal }}> = {
  args: {
    {{ inputs.model | camel }}s: mock{{ inputs.model | pascal }}List
  }
};
```

# `src/components/model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}/{{ inputs.component | pascal }}.test.tsx`

```ts
import renderer from "react-test-renderer";

import { mock{{ inputs.model | pascal }}List } from "@/mocks/{{ inputs.model | pascal }}"

import { {{ inputs.component | pascal }} } from "./index"

describe("model/{{ inputs.model | pascal }}/{{ inputs.component | pascal }}", () => {
  it("Snapshot", () => {
    const component = renderer.create(<{{ inputs.component | pascal }} {{ inputs.model | camel }}s={mock{{ inputs.model | pascal }}List} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
```
