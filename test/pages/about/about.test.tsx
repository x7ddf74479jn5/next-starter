/**
 * @jest-environment jsdom
 */
// import { render } from "";
import { render } from "jest/testUtils";
import About from "src/pages/about";
// render
describe("About page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
