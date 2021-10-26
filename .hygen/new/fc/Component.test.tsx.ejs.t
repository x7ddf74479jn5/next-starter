---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
import renderer from "react-test-renderer";

import { <%= component_name %> } from "./";

describe("<%= path %>", () => {
  it("Snapshot", () => {
    const component = renderer.create(<<%= component_name %> />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});