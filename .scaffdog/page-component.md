---
name: "pc"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter component name"
---

# `src/components/page/{{ inputs.name | pascal }}/index.ts`

```ts
export { {{ inputs.name | pascal }}Page } from "./Page"
```

# `src/components/page/{{ inputs.name | pascal }}/Page.tsx`

```tsx
import type { NextPage } from "next"
import Head from "next/head"

import { {{ inputs.name | pascal }}PageView } from "./View"

export const {{ inputs.name | pascal }}Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>{{ inputs.name }}</title>
        <meta
          name="description"
          content="Write page description here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <{{ inputs.name | pascal }}PageView />
    </>
  )
}
```

# `src/components/page/{{ inputs.name | pascal }}/View.tsx`

```tsx
export const {{ inputs.name | pascal }}PageView: React.FC = () => {
  return (
    <main>
      <h1>Hello world!</h1>
    </main>
  )
}
```

# `src/components/page/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type{ ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { {{ inputs.name | pascal }}PageView } from "./View"

export default {
  title: "Page/{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }}PageView,
} as ComponentMeta<typeof {{ inputs.name | pascal }}PageView>;

export const Default: ComponentStoryObj<typeof {{ inputs.name | pascal }}PageView> = {
  args: {}
};
```

# `src/pages/{{ inputs.name | kebab }}.tsx`

```tsx
export { {{ inputs.name | pascal }}Page as default } from "@/components/page/{{ inputs.name | pascal }}"
```

# `src/components/page/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```ts
import renderer from "react-test-renderer";

import { {{ inputs.name | pascal }}Page } from "./index"

describe("page/{{ inputs.name | pascal }}", () => {
  it("Snapshot", () => {
    const component = renderer.create(<{{ inputs.name | pascal }}Page />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
```
