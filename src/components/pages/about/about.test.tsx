/**
 * @jest-environment jsdom
 */
import { render } from "jest/test-utils";
import About from "src/components/pages/about";
// render
describe("About page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
