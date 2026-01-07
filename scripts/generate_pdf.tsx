import { renderToBuffer } from "@react-pdf/renderer";
import { makePdfDocument } from "../features/cv/pdf/CvPDFDocument";
import { data } from "../data/cv_data";

export async function generateCvPdfBuffer(): Promise<Buffer> {
  const document = makePdfDocument(data);
  const buffer = await renderToBuffer(document);
  return Buffer.from(buffer);
}

if (require.main === module) {
  (async () => {
    const fs = await import("node:fs");
    const path = await import("node:path");

    const args = process.argv.slice(2);
    const employerNameIndex = args.indexOf("--employerName");
    const employerName =
      employerNameIndex !== -1 ? args[employerNameIndex + 1] : undefined;

    const buffer = await generateCvPdfBuffer();

    const dateStamp = new Date().toISOString().split("T")[0].replace(/-/g, "_"); // YYYY_MM_DD
    const employerSuffix = employerName
      ? `_${employerName.toLowerCase().replace(/\s+/g, "_")}`
      : "";

    const outPath = path.join(
      process.cwd(),
      "generated",
      "pdf",
      `james_belch_cv_${dateStamp}${employerSuffix}.pdf`
    );

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    if (fs.existsSync(outPath)) {
      fs.unlinkSync(outPath);
    }
    fs.writeFileSync(outPath, buffer);

    console.log(`Wrote PDF to ${outPath}`);
  })().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
