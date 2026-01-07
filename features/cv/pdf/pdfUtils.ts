import type {
  CvData,
  DateRange,
  TechnologyCategory,
} from "@data/types/cv_types";

export const formatDateRange = (date: DateRange) => {
  if (!date) return "";
  const end = date.end ?? "Present";
  return `${date.start} – ${end}`;
};

export const formatTechnologies = (technologies: TechnologyCategory[]) =>
  technologies.map(
    (tech) => `${tech.title}: ${tech.items.filter(Boolean).join(", ")}`,
  );

export const withHttp = (url?: string | null): string | null => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
};

export const buildCityProvince = (data: CvData) => {
  return [data.contactInfo.city, data.contactInfo.province]
    .filter(Boolean)
    .join(", ");
};