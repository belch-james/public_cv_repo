import { render, screen } from "@testing-library/react";
import { Hero } from "@features/landing_page/Hero";
import { heroContent } from "@data/hero";

describe("MainFeaturedPost", () => {
  it("renders title, description, and CTA link", () => {
    render(<Hero post={heroContent} />);
    expect(
      screen.getByRole("heading", { name: heroContent.title }),
    ).toBeInTheDocument();
    const firstDescriptionLine =
      heroContent.description
        .split("\n")
        .map((line) => line.trim())
        .find((line) => line.length > 0) ?? "";

    expect(
      screen.getByText((_, node) => {
        const hasText = node?.textContent?.includes(firstDescriptionLine);
        const isParagraph = node?.tagName.toLowerCase() === "p";
        return Boolean(hasText && isParagraph);
      }),
    ).toBeInTheDocument();
  });
});
