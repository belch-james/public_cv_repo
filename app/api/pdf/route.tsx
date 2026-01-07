import { promises as fs } from "node:fs";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { uiCopy } from "@data/ui_text";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function verifyTurnstileToken(token: string, ip?: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured.");
    return false;
  }

  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip) {
    formData.append("remoteip", ip);
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.error("Turnstile verification failed to respond.");
      return false;
    }

    const result = await response.json();
    if (!result.success) {
      console.warn("Turnstile verification error:", result["error-codes"]);
    }
    return Boolean(result.success);
  } catch (error) {
    console.error("Turnstile verification threw:", error);
    return false;
  }
}

async function readPdfBuffer() {
  const pdfPath = path.join(process.cwd(), "public", "james_belch_cv.pdf");
  return fs.readFile(pdfPath);
}

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    if (!token) {
      return NextResponse.json(
        { error: uiCopy.errors.turnstileTokenRequired },
        { status: 400 },
      );
    }

    const remoteIp =
      req.headers.get("cf-connecting-ip") ??
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      undefined;

    const isHuman = await verifyTurnstileToken(token, remoteIp);
    if (!isHuman) {
      return NextResponse.json(
        { error: uiCopy.errors.humanVerificationFailed },
        { status: 403 },
      );
    }

    const pdfBuffer = await readPdfBuffer();
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${uiCopy.filenames.cv}"`,
      },
    });
  } catch (error) {
    console.error("PDF download failed:", error);
    const details =
      error instanceof Error ? error.message : "Unknown error occurred";
    return new NextResponse(
      JSON.stringify({ error: uiCopy.errors.failedToGeneratePdf, details }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}

export function GET() {
  return NextResponse.json(
    { error: uiCopy.errors.pdfGetUnsupported },
    { status: 405 },
  );
}
