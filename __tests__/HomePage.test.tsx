import { render, screen } from "@testing-library/react";
import HomePage from "@app/page";
import { heroContent } from "@data/hero";

describe("HomePage", () => {
  it("renders hero content", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: heroContent.title }),
    ).toBeInTheDocument();
  });
});
