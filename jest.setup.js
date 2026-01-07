import "@testing-library/jest-dom";
import fs from "node:fs";
import path from "node:path";

jest.mock("next/link", () => require("./__mocks__/next-link.js"));
jest.mock("next/image", () => require("./__mocks__/next-image.js"));

const failureLogPath = path.join(process.cwd(), "test-failures.log");

if (!globalThis.__JEST_FAILURE_LOG_INITIALIZED) {
  try {
    fs.mkdirSync(path.dirname(failureLogPath), { recursive: true });
    fs.writeFileSync(failureLogPath, "", { flag: "w" });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn("Unable to initialize test failure log file:", error);
  }

  globalThis.__JEST_FAILURE_LOG_INITIALIZED = true;
}

function logFailedTestResult(result) {
  if (result.status !== "failed") {
    return;
  }

  const header = `\n[FAILED TEST] ${result.fullName}`;
  const details = result.failedExpectations
    .map((failure, index) => {
      const location = failure.matcherName ? ` (${failure.matcherName})` : "";
      const stack = failure.stack ? `\n${failure.stack}` : "";
      return `  ${index + 1}. ${failure.message}${location}${stack}`;
    })
    .join("\n");

  // eslint-disable-next-line no-console
  console.error(`${header}\n${details}\n`);

  try {
    fs.appendFileSync(failureLogPath, `${header}\n${details}\n`, "utf8");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn("Unable to write to test failure log file:", error);
  }
}

if (typeof jasmine !== "undefined" && jasmine.getEnv) {
  jasmine.getEnv().addReporter({
    specDone: logFailedTestResult,
  });
}
