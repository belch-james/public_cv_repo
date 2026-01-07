import { ProjectList } from "@components/ui";
import type { WorkExperience } from "@data/types/cv_types";
import Calendar from "@features/cv/assets/icons/calendar.svg";

interface ProjectsProps {
  workType: WorkExperience[];
}

export const Projects = ({ workType }: ProjectsProps) => {
  return <ProjectList workType={workType} showIcon iconSrc={Calendar.src} />;
};
