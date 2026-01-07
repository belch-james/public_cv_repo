import { renderToBuffer } from "@react-pdf/renderer";
import { makePdfDocument } from "@features/cv/pdf/CvPDFDocument";
import { generateCvPdfBuffer } from "../scripts/generate_pdf";
import { data } from "../data/cv_data";

jest.mock("@react-pdf/renderer", () => ({
  renderToBuffer: jest.fn(),
}));

jest.mock("@features/cv/pdf/CvPDFDocument", () => ({
  makePdfDocument: jest.fn(),
}));

const mockRenderToBuffer =
  renderToBuffer as jest.MockedFunction<typeof renderToBuffer>;
const mockMakePdfDocument =
  makePdfDocument as jest.MockedFunction<typeof makePdfDocument>;

describe("generateCvPdfBuffer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("uses cv_data to build the PDF document and passes it to renderToBuffer", async () => {
    const fakeDocument = { kind: "pdf-document" } as any;
    const fakeBuffer = Buffer.from("fake-binary");

    mockMakePdfDocument.mockReturnValue(fakeDocument);
    mockRenderToBuffer.mockResolvedValue(fakeBuffer);

    const result = await generateCvPdfBuffer();

    expect(mockMakePdfDocument).toHaveBeenCalledTimes(1);
    expect(mockMakePdfDocument).toHaveBeenCalledWith(data);

    expect(mockRenderToBuffer).toHaveBeenCalledTimes(1);
    expect(mockRenderToBuffer).toHaveBeenCalledWith(fakeDocument);

    expect(Buffer.isBuffer(result)).toBe(true);
  });

  it("returns a Buffer whose contents match the renderer output", async () => {
    const fakeDocument = { kind: "pdf-document" } as any;
    const originalBuffer = Buffer.from("original-binary");

    mockMakePdfDocument.mockReturnValue(fakeDocument);
    mockRenderToBuffer.mockResolvedValue(originalBuffer);

    const result = await generateCvPdfBuffer();

    expect(Buffer.isBuffer(result)).toBe(true);
    expect(result.equals(originalBuffer)).toBe(true);
  });
});
