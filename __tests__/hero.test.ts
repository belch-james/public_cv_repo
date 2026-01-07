import { heroContent } from "@data/hero";

describe("heroContent data contract", () => {
  it("exposes the minimum hero fields required by the landing hero", () => {
    expect(heroContent.title).toBeTruthy();
    expect(heroContent.description).toBeTruthy();
    if (heroContent.backgroundImage) {
      expect(heroContent.backgroundImage).toMatch(/\.(jpg|jpeg|png|webp)$/i);
    }
  });

  it("only sets CTA metadata when both link text and href exist", () => {
    if (heroContent.linkText || heroContent.href) {
      expect(heroContent.linkText).toBeTruthy();
      expect(heroContent.href).toBeTruthy();
    }
  });
});
