import type { Metadata } from "next";
import { CvPageClient } from "./CvPageClient";

export const metadata: Metadata = {
  title: "CV • James Belch",
};

export default function CvPage() {
  return <CvPageClient />;
}
