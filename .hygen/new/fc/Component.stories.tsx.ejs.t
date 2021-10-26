---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { <%= component_name %> } from "./";

export default {
  title: "<%= abs_path %>/<%= component_name %>",
  component: <%= component_name %>,
} as ComponentMeta<typeof <%= component_name %>>;

const Template: ComponentStory<typeof <%= component_name %>> = (args) => {
  return (
    <<%= component_name %> {...args} />
  );
};

export const Default = Template.bind({});

Default.args = {

};