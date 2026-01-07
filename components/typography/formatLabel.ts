/**
 * Formats variable-like strings (snake_case, camelCase, kebab-case)
 * into human-readable Title Case or Sentence case.
 *
 * @example
 * formatLabel("next_cv") // "Next CV"
 * formatLabel("fantasy_hockey") // "Fantasy Hockey"
 * formatLabel("myProjectName") // "My Project Name"
 * formatLabel("api-endpoint") // "API Endpoint"
 */
export function formatLabel(input: string, style: "title" | "sentence" = "title"): string {
  if (!input) return "";

  // Common acronyms to keep uppercase
  const acronyms = new Set(["api", "cv", "ui", "ux", "id", "url", "html", "css", "js", "ts", "pdf", "seo", "aws", "gcp"]);

  // Replace underscores and hyphens with spaces
  let result = input.replace(/[_-]/g, " ");

  // Split camelCase into words (insert space before uppercase letters)
  result = result.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Split PascalCase sequences (e.g., "XMLParser" -> "XML Parser")
  result = result.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");

  // Normalize multiple spaces
  result = result.replace(/\s+/g, " ").trim();

  // Title Case: capitalize each word, handling acronyms
  const words = result.toLowerCase().split(" ");
  const formatted = words.map((word) => {
    if (acronyms.has(word)) {
      return word.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  if (style === "sentence") {
    // Sentence case: only first word capitalized (except acronyms)
    return formatted
      .map((word, i) => {
        if (i === 0) return word;
        if (acronyms.has(word.toLowerCase())) return word;
        return word.toLowerCase();
      })
      .join(" ");
  }

  return formatted.join(" ");
}

/**
 * Check if a string looks like a variable/identifier
 * (contains underscores, hyphens between words, or camelCase)
 */
export function isVariableLike(input: string): boolean {
  if (!input) return false;
  // Has underscores or hyphens
  if (/_|-/.test(input)) return true;
  // Has camelCase pattern (lowercase followed by uppercase)
  if (/[a-z][A-Z]/.test(input)) return true;
  return false;
}
