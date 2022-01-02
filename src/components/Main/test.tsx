import { render, screen } from "@testing-library/react";
import Main from "./index";

describe("<Main/>", () => {
  it("render heading", () => {
    render(<Main />);
    expect(
      screen.queryByRole("heading", { name: /NextJS Boilerplate/i })
    ).toBeInTheDocument();
  });
  it("snapshot is match", () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("right background color", () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({ "background-color": "#06092b" });
  });
});
