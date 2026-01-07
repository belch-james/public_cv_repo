export interface HeaderSection {
  title: string;
  url: string;
  target?: "_self" | "_blank";
}

export interface HeaderProps {
  sections: HeaderSection[];
}
