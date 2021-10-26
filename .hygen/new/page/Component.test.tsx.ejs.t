---
to: <%= abs_path %>/<%= page_name %>.test.tsx
---
import renderer from "react-test-renderer";

import <%= h.changeCase.pascal(page_name) %> from "./<%= file_name %>.page";

describe("<%= path %>", () => {
  it("Snapshot", () => {
    const component = renderer.create(<<%= h.changeCase.pascal(page_name) %> />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});