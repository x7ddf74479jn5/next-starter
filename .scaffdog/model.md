---
name: "m"
root: "."
output: "**/*"
ignore: []
questions:
  name: "Please enter model name"
---

# `src/models/{{ inputs.name | pascal }}.ts`

```ts
export type {{ inputs.name | pascal }} = {
  name: string
}

export type {{ inputs.name | pascal }}Props = {
  {{ inputs.name | camel }}: {{ inputs.name | pascal }}
}

export type {{ inputs.name | pascal }}ListProps = {
  {{ inputs.name | camel }}s: {{ inputs.name | pascal }}[]
}
```

# `src/mocks/{{ inputs.name | pascal }}.ts`

```ts
import type { {{ inputs.name | pascal }} } from "@/models/{{ inputs.name | pascal }}"

export const mock{{ inputs.name | pascal }}: {{ inputs.name | pascal }} = {
  name: "Pandashark",
}

export const mock{{ inputs.name | pascal }}List = [mock{{ inputs.name | pascal }}, mock{{ inputs.name | pascal }}, mock{{ inputs.name | pascal }}]
```
