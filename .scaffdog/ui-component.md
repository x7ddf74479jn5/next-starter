---
name: "uc"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter component name"
---

# `src/components/ui/{{ inputs.name | pascal }}/index.ts`

```ts
export { {{ inputs.name | pascal }} } from "./{{ inputs.name | pascal }}"
```

# `src/components/ui/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type{ ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { {{ inputs.name | pascal }} } from "./index"

export default {
  title: "UI/{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>;

export const Default: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {
  args: {}
};
```

# `src/components/ui/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
type {{ inputs.name | pascal }}Props = {
  children?: React.ReactNode;
  className?: string;
}

export const {{ inputs.name | pascal }}: React.FC<{{ inputs.name | pascal }}Props> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}
```

# `src/components/ui/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```ts
import renderer from "react-test-renderer";

import { {{ inputs.name | pascal }} } from "./index"

describe("ui/{{ inputs.name | pascal }}", () => {
  it("Snapshot", () => {
    const component = renderer.create(<{{ inputs.name | pascal }} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
```
