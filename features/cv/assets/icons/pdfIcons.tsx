import { Svg, Path, Rect, Circle } from "@react-pdf/renderer";

export interface PdfIconProps {
  size?: number;
}

const defaultSize = 10;

export const MailIconSvg = ({ size = defaultSize }: PdfIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect
      x={2}
      y={4}
      width={20}
      height={16}
      rx={2}
      stroke="#222222"
      strokeWidth={2}
      fill="none"
    />
    <Path
      d="M22 7 13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7"
      stroke="#222222"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MapPinIconSvg = ({ size = defaultSize }: PdfIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"
      stroke="#222222"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={12}
      cy={10}
      r={3}
      stroke="#222222"
      strokeWidth={2}
      fill="none"
    />
  </Svg>
);

export const LinkIconSvg = ({ size = defaultSize }: PdfIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M10 13a5 5 0 0 0 7.54.54l1.92-1.92a5 5 0 0 0-7.07-7.07L11 6"
      stroke="#222222"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 11a5 5 0 0 0-7.54-.54l-1.92 1.92a5 5 0 0 0 7.07 7.07L13 18"
      stroke="#222222"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GithubIconSvg = ({ size = defaultSize }: PdfIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={11} fill="#222222" />
    <Path
      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5A5.4 5.4 0 0 0 18.5 5 5.2 5.2 0 0 0 18.6 3S17.7 2.7 15 4.5a13.4 13.4 0 0 0-6 0C6.3 2.7 5.4 3 5.4 3A5.2 5.2 0 0 0 5.5 5 5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5A4.8 4.8 0 0 0 9 18v4"
      stroke="#FFFFFF"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PhoneIconSvg = ({ size = defaultSize }: PdfIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      stroke="#222222"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
